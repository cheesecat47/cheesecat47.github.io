---
layout: post
title:  "[2019-1 OS] Pintos project1"
date:   2019-4-19 23:15:00 +0900
categories: Programming
---

Pintos is a simple operating system framework for the x86 architecture. It supports kernel threads, loading and running user programmes, and a file system, but it implements all of these in a very simple way.  

In first project assignment, the goal is to reimplement functions related to threads and timer.  
The function I have to extend is the timer_sleep() defined in 'devices/timer.c'.  

The original version is working.
{% highlight C %}
void
timer_sleep (int64_t ticks)
{
  int64_t start = timer_ticks ();

  ASSERT (intr_get_level () == INTR_ON);
  while (timer_elapsed (start) < ticks)
    thread_yield ();
}
{% endhighlight %}

{% highlight C %}
void
thread_yield(void)
{
  struct thread *cur = thread_current ();
  enum intr_level old_level;

  ASSERT (!intr_context ());

  old_level = intr_disable ();
  if (cur != idle_thread)
    list_push_back (&ready_list, &cur->elem);
  cur->status = THREAD_READY;
  schedule ();
  intr_set_level (old_level);
}
{% endhighlight %}

But it keep checking the current time and calling thread_yield() because it implemented using while loop. This called "Busy waiting".  
And also, thread_yield() place the current thread at the back of the ready queue, not the waiting queue.

To solve this problem, block the current thread with thread_block() funtion.
{% highlight C %}
void
thread_block (void)
{
  ASSERT (!intr_context ());
  ASSERT (intr_get_level () == INTR_OFF);

  thread_current ()->status = THREAD_BLOCKED;
  schedule ();
}
{% endhighlight %}
This function makes the current thread to sleep. It means, the thread will not be scheduled again until awoken by thread_unblock().

We need to make a waiting queue since Pintos doesn't have a waiting queue. And then put the current thread thread to the waiting queue. Next block that thread.  
It won't be make 'busy waiting' after this three step process.
