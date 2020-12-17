---
layout: post
title:  "[2019-1 Compiler] LexAnalyzer"
date:   2019-4-2 23:15:00 +0900
categories: Programming
---

First assignment in Compiler class was making my own version of lexical analyzer.
It would be fast and easy if I was familiar with regex.

I assigned all these words one by one, but there must be easy way then I did...
{% highlight C %}
char reserved[32][10] = {
	"asm","auto","break","case","char","const","continue","default", "do",\
	"double","else","extern","float","for","goto","if","int","long","register",\
	"return","short","signed","sizeof","static","struct","switch","typedef",\
	"union","unsigned","void","volatile","while"};

char pre_dir[14][10] = {
	"define","error","import","undef","elif", "if", "include", "using",\
	"else", "ifdef", "line", "endif","ifndef", "pragma"};

char operator[][4] = {
	"+", "-", "*", "/", "%", "++", "--","==", "!=", ">", "<", ">=", "<=",\
	"!", "&&", "||", "~", "&", "|", "^","<<", ">>", "+=", "-=", "*=", "/=",\
	"%=", "&=", "|=", "^=", "<<=", ">>="};
{% endhighlight %}

<br>Main function starts from here.
{% highlight C %}
int main(void) {
	FILE *fp, *fo;
	int i, j, k, predirFlag = 0;
	char inputStr[255] = "";
	char str[255] = "";
{% endhighlight %}
Declare all variables used in this programme.  


{% highlight C %}
	while (fgets(inputStr, sizeof(inputStr), fp)) {
		for (i = 0; i < strlen(inputStr); i++) {

			if (inputStr[i] == ' ') i++;
			if (inputStr[i] == '\n') break;


			if (isalpha(inputStr[i])) {
				j = 0;
				concatStr(inputStr, str, &i, &j, 'a');
				isIdenResv(str);
				memset(str, '\0', sizeof(str));
			}


			else if (isdigit(inputStr[i])) {
				j = 0;
				concatStr(inputStr, str, &i, &j, 'n');
				insert_symtbl("numeric constant", str);
				memset(str, '\0', sizeof(str));
			}


			else if (ispunct(inputStr[i])) {
				if (inputStr[i] == '#') {
					j = 0;
					chtostr(inputStr[i++], str, "special character");
					concatStr(inputStr, str, &i, &j, 'a');
					for (k = 0; k < 14; k++) {
						if (strcmp(pre_dir[k], str) == 0) {
							insert_symtbl("preprocessor directives", str);
							predirFlag = 1;
							break;
						}
					}
				}

 				else if (inputStr[i] == '\'') {
					chtostr(inputStr[i++], str, "special character");
					chtostr(inputStr[i++], str, "character constant");
					chtostr(inputStr[i], str, "special character");
				}

				else if (inputStr[i] == '"') {
					chtostr(inputStr[i++], str, "special character");
					j = 0;
					concatStr(inputStr, str, &i, &j, 'c');
					insert_symtbl("string constant", str);
					memset(str, '\0', sizeof(str));
					chtostr(inputStr[i], str, "special character");
				}

				else if (strchr("+-*/%=!&|^", inputStr[i])!=NULL) {
					j = 0;
					concatStr(inputStr, str, &i, &j, 's');

					if ((strcmp(str, "+")==0 || strcmp(str, "-") == 0)&&(isdigit(inputStr[i+1]))) {
						i++;
						concatStr(inputStr, str, &i, &j, 'n');
						insert_symtbl("numeric constant", str);
						memset(str, '\0', sizeof(str));
						continue;
					}

					if (strcmp(str, "=") == 0) {
						insert_symtbl("assign symbol", str); i++;
						memset(str, '\0', sizeof(str));
						continue;
					}

					for (k = 0; k < 32; k++) {
						if (strcmp(operator[k], str) == 0) {
							insert_symtbl("operator", str);
							break;
						}
					}
				}

				else if(inputStr[i] == '<' || inputStr[i] == '>') {
					j = 0;
					concatStr(inputStr, str, &i, &j, 's');
					for (k = 0; k < 32; k++) {
						if (strcmp(operator[k], str) == 0 && predirFlag == 0) {
							insert_symtbl("operator", str); i++;
							break;
						}
					}
					if (k == 32 && predirFlag == 1 && inputStr[i] == '>') predirFlag = 0;
					if (k == 32) chtostr(inputStr[i], str, "separate symbol");
				}

				else if (strchr(".,;:(){}", inputStr[i]) != NULL) {
					chtostr(inputStr[i], str, "separate symbol");
				}

				else {
					chtostr(inputStr[i], str, "special character");
				}

				memset(str, '\0', sizeof(str));
			}
		}
		memset(inputStr, '\0', sizeof(inputStr));
	}
{% endhighlight %}

{% highlight C %}
void isIdenResv(char token[]) {
	int i;
	for (i = 0; i < 32; i++) {
		if (strcmp(reserved[i], token)==0) {
			insert_symtbl("reserved words", token);
			return;
		}
	}
	insert_symtbl("identifier", token);
	return;
}
{% endhighlight %}


{% highlight C %}
void concatStr(char src[], char dest[], int *srcIdx, int *destIdx, char op) {
	switch (op) {
		case 'a':
			while (isalnum(src[*srcIdx])) {
				dest[(*destIdx)++] += src[(*srcIdx)++];
			}
			(*srcIdx)--;
			break;
		case 'c':
			while (src[*srcIdx] != '\"') {
				dest[(*destIdx)++] += src[(*srcIdx)++];
			}
			break;
		case 'n':
			while (isdigit(src[*srcIdx]) || src[*srcIdx] == '.' || src[*srcIdx] == 'e' || src[*srcIdx] == '+' || src[*srcIdx] == '-') {
				dest[(*destIdx)++] += src[(*srcIdx)++];
			}
			(*srcIdx)--;
			break;
		case 's':
			while (ispunct(src[*srcIdx]) && src[*srcIdx]!=',' && src[*srcIdx]!=')') {
				dest[(*destIdx)++] += src[(*srcIdx)++];
			}
			(*srcIdx)--;
			break;
	}
}


void chtostr(char src, char dest[], char type[]) {
	sprintf_s(dest, sizeof(dest), "%c", src);
	insert_symtbl(type, dest);
	memset(dest, '\0', sizeof(dest));
}
{% endhighlight %}


{% highlight C %}
void insert_symtbl(char type[], char token[]) {
	insert_tknlst("", token);

	if (strstr(type, "constant")!=NULL) {
		insert_contbl(type, token);
	}

	strcpy_s(symbolTable[idx_symtbl].type, sizeof(symbolTable[idx_symtbl].type), type);
	strcpy_s(symbolTable[idx_symtbl].token, sizeof(symbolTable[idx_symtbl].token), token);
	idx_symtbl++;
}

void insert_tknlst(char type[], char token[]) {
	strcpy_s(tokenList[idx_tknlst].type, sizeof(tokenList[idx_tknlst].type), type);
	strcpy_s(tokenList[idx_tknlst].token, sizeof(tokenList[idx_tknlst].token), token);
	idx_tknlst++;
}

void insert_contbl(char type[], char token[]) {
	strcpy_s(constantTable[idx_contbl].type, sizeof(constantTable[idx_contbl].type), type);
	strcpy_s(constantTable[idx_contbl].token, sizeof(constantTable[idx_contbl].token), token);
	idx_contbl++;
}
{% endhighlight %}
<br>This is not a perfect code. There's more cases to handle and the code is also not optimized.
But it makes me realised why I have to learn more (including regex).
