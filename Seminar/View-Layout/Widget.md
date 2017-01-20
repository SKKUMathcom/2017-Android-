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

1.text

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
3.textSize

텍스트의 크기입니다. 단위는 sp(폰트사이즈) dp(자세한내용은 [이곳의 단위](https://github.com/SKKUMathcom/2017-Android-/blob/master/Seminar/View-Layout/View.md#layout_width-layout_height)를 확인하시오
***
4.textStyle

문자의 속성(기울게(italic)나 굵게(bold))을 나타냅니다. '|'로 여러개를 나타낼 수 있으며 '|'앞뒤로는 공백이 있으면 안되요.
***
5.typeFace

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

***
6.singleLine

TextView의 text를 한줄에 씁니다. 한줄의 영역을 넘어가면 '...'으로 표시됩니다.

후... 길었다..... 근데 나머지는 짧을꺼에요 하핳.. TextView는 글자가 들어간 위젯의 부모라서 글자가 들어간 위젯은 다 이 기능들을 가져서 자세히 한겁니다 하핳

## Button

button은 TextView에서 클릭했을 때의 기능이 추가된 걸 말합니다. onClick이라는 속성을 부여하여 click했을 떄의 기능을 정의할 수 있습니다.

onClick 속성을 부여하지 않고 java에서 button의 객체에 OnClickListener를 오버라이딩해서 클릭했을 때의 기능을 만들 수도 있습니다.

자세한건 [View에서 ID중에](https://github.com/SKKUMathcom/2017-Android-/blob/master/Seminar/View-Layout/View.md#id)에서 좀 내려가면 있어요.

## ToggleButton

컴퓨터를 사용하다보면 on/off 스위치처럼 버튼이 눌린 상태로 유지되는 버튼을 본적있을 겁니다. 그런 기능을 하는게 바로 ToggleButton입니다. 

안드로이드는 ToggleButton을 기본적으로 가운데 불빛이 들어오는 버튼으로 만드는데 버튼이 눌려있을 때에는 불빛이 들어오고 안눌려있을 때에는 불빛이 꺼집니다. 


다른건 거의 button하고 같으니 on일때랑 off 일 때의 특성들을 살펴보죠
***
1. textOn

ToggleButton이 클릭되었을 때에 띄우는 Text입니다. 
***
2. textOff

당연히 ToggleButton이 클릭 안됬을 떄 띄우는 Text겠죠?? 
***
ToggleButton은 클릭 되고 안되고 두가지 경우밖에 없기 때문에 text는 크게 의미가 없습니다. 

ToggleButton을 클릭했을 때의 배경도 조금 복잡하지만 설정이 가능합니다. 

(1) xml로 설정하는 방법

먼저 drawable에 다음과 같이 두장의 사진과 새 xml파일 togglebutton_selected.xml을 만들어줍시다

![toggle](https://github.com/SKKUMathcom/2017-Android-/blob/master/Seminar/Figure/toggle1.PNG)

xml 파일에는 아래와 같이 작성합니다.

```shell

<?xml version="1.0" encoding="utf-8"?>
<selector xmlns:android="http://schemas.android.com/apk/res/android">
    <item android:state_checked="true" android:drawable="@drawable/pichu"/>
    <item android:state_checked="false" android:drawable="@drawable/pickachu"/>
</selector>

```

그리고 activity_main.xml로 가서 ToggleButton의 background를 아래와 같이 수정해줍시다.

```
 android:background="@drawable/togglebutton_selected"
```

그럼 아래와 같이 이미지가 바뀌게 됩니다.

![toggle2](https://github.com/SKKUMathcom/2017-Android-/blob/master/Seminar/Figure/toggle2.PNG)

(2) java로 설정하는 방법

자바로 할 때에는 toggle 이 클릭되기 전 시작사진, 클릭된 후 사진, 해제된 후 사진 이렇게 3개의 사진을 설정할 수 있습니다. ( 두개만 하고싶으면 초기사진을 해제된사진과 같게하세요)

xml에 가서 클릭 되기전 초기사진을 배경으로 설정해줍시다. 

ToggleButton의 background를 다음과 같이 수정해줍니다. java에서 사용할 꺼니 id도 설정해줍시다.

```shell
 android:background="#ff000000"
 android:id="@+id/toggleButton"

```

이제 자바파일 가서 아래처럼 수정해줍시다.

```shell

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        final ToggleButton toggleButton = (ToggleButton)findViewById(R.id.toggleButton);
        toggleButton.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View v){
                if(toggleButton.isChecked())
                    toggleButton.setBackgroundDrawable(getResources().getDrawable(R.drawable.pichu));
                else
                    toggleButton.setBackgroundDrawable(getResources().getDrawable(R.drawable.pickachu));



            }
        });
    }
```

먼저 ToggleButton으로 toggleButton이라는 객체를 생성해주고 findeViewById로 우리가 만든 toggleButton을 할당해줍니다.

toggleButton에 onClicked 속성을 안만들어줬으니 만들어줘야겠죠. setOnClickListener로 onClick을 설정하게 한 뒤 Override를 시켜서 onClick 메소드를 수정해줍니다.

onClick에서 toggleButton을 수정해주기 때문에 처음에 toggleButton을 선언할 때 final을 붙여줘요 (final 붙으면 수정이 불가능해져서 toggleButton의 onClick을 overriding 할 때 변수가 변환되는걸 방지)

그리고 다음 문장이 중요합니다.

toggleButton.isChecked()로 if문을 확인하는데요, ToggleButton은 버튼이 클릭되면 isChecked가 true로, 해제되면 false로 바뀝니다. 이를 이용해 Drawable에서 사진을 가져온 다음 그걸 배경으로 설정하는거죠.

정리하자면 ToggleButton의 개념은 클릭했을 때랑 해제했을 때랑 나뉘는 버튼이며 핵심은 isChecked로 확인한 뒤 if문을 이용해서 이에 따른 동작을 넣어줄 수 있다는겁니다!!

## CheckBox&RadioButton

CheckBox와 RadioButton 또한 Button을 상속합니다. 또한 ToggleButton과 마찬가지로 버튼의 상태를 확인할 수있습니다.

흔히 설문조사에서 자주 쓰이며 ToggleButton처럼 isChecked() 와 setChecked(boolean) 두가지 메소드가 존재합니다.

하지만 ToggleButton처럼 android:textOn, android:textOff의 특성은 제공되지 않는다는 차이가 있습니다.(그래서 android:text가 여기선 중요합니다.)

RadioButton은 CheckBox와는 다르게 RadioGroup으로 묶어 여러개중에 복수선택을 허용하지 않을 수 있습니다. 

아래는 RadioButton의 예시입니다.

```
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:id="@+id/activity_main"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:paddingBottom="@dimen/activity_vertical_margin"
    android:paddingLeft="@dimen/activity_horizontal_margin"
    android:paddingRight="@dimen/activity_horizontal_margin"
    android:paddingTop="@dimen/activity_vertical_margin"
    android:orientation="vertical"
    tools:context="kiwoong_ex.widget_test.MainActivity">

    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="성별"
        android:textSize="20dp"
        android:id="@+id/text"/>
    <RadioGroup
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:orientation="horizontal"
        >
        <RadioButton
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="Female"
            />
        <RadioButton
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="Male"/>

    </RadioGroup>

    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Language"/>
    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:orientation="horizontal">
        <RadioButton
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="C"/>
        <RadioButton
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="C++"/>
        <RadioButton
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="JAVA"/>
        <RadioButton
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="Python"/>

        <RadioButton
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="JavaScript"/>
    </LinearLayout>

</LinearLayout>

```

실행결과 다음과 같이 됨을 알 수 있습니다.

![RadioButton](https://github.com/SKKUMathcom/2017-Android-/blob/master/Seminar/Figure/RadioButton1.PNG)

## CheckedTextView

CheckedTextView는 Java 코드에서 setOnClickListener를 이용해 클릭하는 기능을 부여한 뒤에 사용하는 위젯입니다. 

부모컨테이너에 맞춰 깔끔한 디자인이 가능하며, 설정창 등에 사용합니다. andriod:checkMark 속성을 이용하여 체크박스의 모양을 설정할 수 있으며,

보통 "?android:attr/listChoiceIndicatorMultiple" 값을 대입하여 사용합니다.

ToggleButton이나 RadioButton, CheckBox처럼 android:checked를 이용해 초기에 클릭이 되어있는지를 설정할 수 있습니다.

앞의 RadioButton과 CheckBox를 같이 활용한 XML 예시입니다.

```shell
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:id="@+id/activity_main"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:paddingBottom="@dimen/activity_vertical_margin"
    android:paddingLeft="@dimen/activity_horizontal_margin"
    android:paddingRight="@dimen/activity_horizontal_margin"
    android:paddingTop="@dimen/activity_vertical_margin"
    android:orientation="vertical"
    tools:context="kiwoong_ex.widget_test.MainActivity">

    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="학년"
        android:textSize="20dp"
        android:id="@+id/text"/>
    <RadioGroup
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:orientation="horizontal"
        >
        <RadioButton
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="1학년"
            />
        <RadioButton
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="2학년"/>

    </RadioGroup>

    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="수강코스"/>
    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:orientation="horizontal">
        <CheckBox
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="TOEIC"
            android:layout_weight="1"/>
        <CheckBox
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="OPIC"
            android:layout_weight="1"
            />
        <CheckBox
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="TEPS"
            android:layout_weight="1"/>
    </LinearLayout>
    <CheckedTextView
        android:text="100%환급반 여부"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:id="@+id/checkedTextView"
        android:gravity="center_vertical"
        android:checkMark="?android:attr/listChoiceIndicatorMultiple"
        android:checked="false" />

</LinearLayout>
```

실행화면

![CheckedTextView](https://github.com/SKKUMathcom/2017-Android-/blob/master/Seminar/Figure/CheckedTextView.PNG)

문제는 실행을 시켜도 CheckedTextView가 클릭이 되질 않습니다! CheckedTextView는 TextView를 상속해서 onClick의 기능이 없어서 그런데요, xml에 onClick을 추가한다고 해서 이 문제가 해결되지는 않습니다.

그럼 어떻게하냐! Java에 가서 setOnClickListener를 이용해 클릭되는 기능을 추가해줘야 합니다.

벌써 한 3번째 하는거니 자세한 설명은 생략하고

```shell

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        final CheckedTextView ctv = (CheckedTextView)findViewById(R.id.checkedTextView);

        ctv.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View v)
            {
                if(ctv.isChecked())
                    ctv.setChecked(false);
                else
                    ctv.setChecked(true);
            }

        });


    }
}

```

그럼 이제 얘도 클릭이 됩니다.

![CheckedTextView2](https://github.com/SKKUMathcom/2017-Android-/blob/master/Seminar/Figure/CheckedTextView2.PNG)

