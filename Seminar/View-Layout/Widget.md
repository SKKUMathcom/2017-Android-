# Widgets

이번엔 여기 xml의 디자인 구성요소 Widgets에 대해 알아봅시다.

![Pallete](https://github.com/SKKUMathcom/2017-Android-/blob/master/Seminar/Figure/widget1.PNG)

위젯은 웬만한 UI 구성 프로그래밍 (java, C#, python, Matlab, etc)끼리는 같은 속성과 이름을 갖습니다.

그니까 지금 배워두면 혹시 나중에 다른 UI를 하시게 되면 편해요

위에서 부터 살펴볼껀데(와 이걸 언제 다하지...) 먼저 TextView에 대해 살펴봅시다.

## TextView

TextView는 화면구성의 가장 기본적인 위젯이라 할 수 있습니다. 생성하기만 해도 Hello World! 라는 위젯을 만들어줄 정도로 기본이에요.

안드로이드는 이 TextView 위젯에 여러 속성들을 제공합니다.

***

1. text

레이블에 표시할 텍스트를 지정합니다. textview는 문자열이 없으면 뷰가 차지하는 영역을 계산할 수 없으므로 반드시 지정해야하는 속성입니다.

문자열은 res/values/strings.xml에서 참조하는데, 속성을 "@string/string_name"으로 할당하여 참조할 수 있습니다.

** strings.sml에서 문자를 참조하면 다국어 지원기능도 구현할 수 있는데, values 폴더를 values-kr, values-en 식으로 나눠 각각에 string을 할당해주면 설정에서 언어를 어떻게 설정하냐에 따라 문자가 바뀝니다.

![multilanguae](https://github.com/SKKUMathcom/2017-Android-/blob/master/Seminar/Figure/text1.PNG)

사진과 같이 프로젝트 솔루션을 project로 바꾸고 res에 value-ko 를 추가 해 준뒤 각각 폴더에 strings.xml파일을 추가해 줍니다.

아이콘이 미국기랑 태극기로 바뀐걸 확인할 수 있죠???

ko의 strings.xml 의 resources 에

```shell
  <string name="viewtext">테스트</string>
```

를 원래의 strings.xml에는 
```shell
  <string name="viewtext">Test</string>
```

를 추가해 준 뒤, activity_main.xml에

```shell
    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="@string/viewtext" />
```
을 추가해 줍시다.

어플을 실행하고 설정을 한국어로 바꾸면 짜잔!!

![한국어다한국어](https://github.com/SKKUMathcom/2017-Android-/blob/master/Seminar/Figure/widget2.PNG)

한국어로 바뀐걸 확인할 수 있습니다.      

***
2.textColor

글자색을 설정합니다.

values의 color.xml을 참조하기도 하고 ##AARRGGBB로 설정해주기도 합니다.

A,R,G,B에는 16진법의 수가 들어가서 16의 제곱 즉 0부터 255까지의 수가 입력될 수 있습니다.

A는 투명도, R은 빨간정도 G는 초록색의 세기, B는 파란색의 세기를 나타냅니다.

안드로이드에서 color는 대부분 이런 식으로 표현하니 알아두세요!!

***
3. textSize

텍스트의 크기입니다. 단위는 sp(폰트사이즈) dp(자세한내용은 [이곳의 단위](https://github.com/SKKUMathcom/2017-Android-/blob/master/Seminar/View-Layout/View.md#layout_width-layout_height)를 확인하시오

4. textStyle

문자의 속성(기울게(italic)나 굵게(bold))을 나타냅니다. '|'로 여러개를 나타낼 수 있으며 '|'앞뒤로는 공백이 있으면 안되요.

5. typeFace

폰트를 나타냅니다. 안드로이드에서 제공되는 폰트는 몇개 없어요.... normal, sans, serif, monospace정도인데 다 별로입니다.

**그래서 준비한 외부폰트 가져오기!!

먼저 app/src/main 폴더에 assets 폴더를 생성해줍니다.

![font1](https://github.com/SKKUMathcom/2017-Android-/blob/master/Seminar/Figure/Font.png)

 그리고 폴더 내에 원하는 폰트 파일(.ttf)를 넣어줍니다.

[네이버에서 제공하는 나눔손글씨 링크를 걸어드리죠](http://appdown.naver.com/naver/font/NanumFont/setup/NanumFontSetup_TTF_SONGEULSSI_hangeulcamp.exe)

설치하면 C:\Windows\Fonts 에 저장되요.

Ctrl+C를 누르고 안드로이드 스튜디오의 assets폴더를 클릭한뒤 ctrl+v를 누르면 알아서 영어로 바껴서 저장되요.. 캬.. 갓구글...

assets는 java에서 참조할 수 있으므로 textview에 id를 부여해줍시다.

```shell
    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="@string/viewtext"
        android:textSize="20dp"
        android:id="@+id/text"/>
```

이제 자바파일에서 참조해봅시다. 

```shell

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Typeface typeface1 = Typeface.createFromAsset(getAssets(),"NanumPen.ttf");

        TextView textview = (TextView)findViewById(R.id.text);
        textview.setTypeface(typeface1);
    }
}

```

Typeface를 객체로 만들어서 Asset으로부터 NanumPen.tff를 넣고 text라는 id를 가진 TextView를 textview로 만들어주고 setTypeface를 이용해 나눔펜체로 설정했습니다.

![결과물](https://github.com/SKKUMathcom/2017-Android-/blob/master/Seminar/Figure/Font2.PNG)
