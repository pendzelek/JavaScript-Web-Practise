#include <iostream>


using namespace std;


int main(){

    int *w;
    int value;
    value = 10;
    cout<<"value: "<<value<<" &value: "<<&value<<endl;
    w= &value;
    cout<<"w: "<< w<<" *w: "<<*w<<endl;
    int value2 = value;
    cout<<"value: "<<value<<" *w: "<<*w<<" value2: "<< value2<<endl;
    value = 15;
    cout<<"value: "<<value<<" *w: "<<*w<<" value2: "<< value2<<endl;
    *w = 20;
    cout<<"value: "<<value<<" *w: "<<*w<<" value2: "<< value2<<endl;

    int tab[10];
    int *wsk;
    wsk = tab;
//    wsk=&tab[0];
    *wsk = 1;
    wsk +=1;
    *wsk = 3;
    wsk++;
    *wsk = 5;
    for(int i = 0; i < 10; i++){
        cout<<i<<"-"<<tab[i]<<endl;
    }

    char a , *b, **c, ***d;
    a = 's';
    b = &a;
    c = &b;
    d = &c;

    cout << c <<" "<< *c << " "<<**c<<endl;

    return 0;

}
