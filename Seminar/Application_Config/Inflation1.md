# Inflation 

앞서 나온 코드들은 JAVA코드에서 View를 생성할때 XML 레이아웃에서 정의된 뷰의 android:id 를 이용해서 자바코드에서 메모리상에 객체화된 뷰를 참조하는 형식입니다.


무슨말이냐면, 프로젝트를 생성할 때 기본으로 생성되는 

```shell

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }
}
```

이 코드에서 onCreate()로 먼저 앱을 실행 시키고, setContentView로 R.layout.activity_main 즉, res폴더의 layout/activity_main.xml에서 선언된 뷰를 메모리에 올린다는 얘기입니다.

이렇게 xml레이아웃에 정의된 내용이 메모리상에 객체화되는 과정을 인플레이션(Inflation)이라고 합니다.

xml파일은 컴파일될 때, binary file로 어플리케이션에 포함되긴하지만 실제로 load 되는건 R.<resource폴더>.<해당xml파일> 로 호출된이후라는거죠.

단적인 예로 setContentView 이전에 R.findByID를 사용하려하면 어플이 치명적 오류가 있다면서 종료됩니다.(해보세욬ㅋ)

쉽게말해 setContentView 등 인플레이션 해주는 method가 호출되기 전에는 용량만 차지하지 사용되지는 않는다는거죠. 그래서 결론은 inflation이 딥따 중요하다 입니다.

이번에는 inflation을 이용해, 버튼을 클릭하면 새로운 액티비티가 생성되는것을 배워봅시다.

# 화면간 이동

안드로이드에서 일반적으로 화면 하나를 하나의 액티비티로 생각할 수 있습니다. 즉, 화면간 이동을 구현하기 위해서는 두개의 액티비티를 만들고 하나의 액티비티를 띄우고 나머지하나를 종료하면 되는거죠

처음 한 [안드로이드 설치부터 실행](https://github.com/SKKUMathcom/2017-Android-/blob/master/Seminar/Introduce/FromCreatet_ToRun.md#뭐라도-해보자) 에서 우린 새로운 layout xml파일과 java 파일을 만들고 manifest에서 새로운 java파일을 등록해주었습니다.

Manifest에서는 어플리케이션의 activity, service 등 어플리케이션의 정보가 다 들어가는 곳입니다. 여기다 등록을 안해주면 그 activity는 실행할수 없어요..

1개의 Java 코드에서는 하나의 액티비티를 main class로 정의하고 이를 xml을 통해 구현합니다. 

그럼 두개의 activity(layout xml)와 java파일을 만들고 manifest에 등록해봅시다. 

먼저 "Activity1이라는 이름으로 빈 프로젝트를 새로 만들고, java에서 Activity1을 복사해 Activity2를, layout의 activity_1.xml을 복사해 activity_2.xml를 만듭니다.

각각 xml에는 다음과 같이 입력해줍니다.

<activity_1.xml>

```shell
<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:id="@+id/activity_1"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:paddingBottom="@dimen/activity_vertical_margin"
    android:paddingLeft="@dimen/activity_horizontal_margin"
    android:paddingRight="@dimen/activity_horizontal_margin"
    android:paddingTop="@dimen/activity_vertical_margin"
    tools:context="kiwoong_ex.example2.Activity1">

    <Button
        android:id="@+id/Button1"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:gravity="center"
        android:layout_centerVertical="true"
        android:onClick="onButton1Clicked"
        android:text="Activity Change!!" />
</RelativeLayout>

```
<activity_2.xml>

```shell
<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:id="@+id/activity_2"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:paddingBottom="@dimen/activity_vertical_margin"
    android:paddingLeft="@dimen/activity_horizontal_margin"
    android:paddingRight="@dimen/activity_horizontal_margin"
    android:paddingTop="@dimen/activity_vertical_margin"
    android:background="#ff000000"
    tools:context="kiwoong_ex.example2.Activity1">

    <Button
        android:id="@+id/Backbutton"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:gravity="center"
        android:onClick="onBackbuttonClicked"
        android:layout_centerVertical="true"
        android:text="ComeBack!!" />
</RelativeLayout>

</RelativeLayout>
```
첫번째 Activity를 나타내는 Activity1 자바코드에 버튼을 누르면 Activity2로 넘어가는 기능을 추가해줍니다.

<Activity1.java>
```shell

public class Activity1 extends AppCompatActivity {

    public static final int requestCode=1; // 다른 액티비티를 띄우기 위한 요청코드
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_1);
    }

        public void onBackbuttonClicked(View v){
        Intent intent = new Intent(getApplicationContext(),Activity2.class); // 새로운 intent를 정의해주는데 그게 Activity2의 class를 불러우는것(Activity2를 띄우는것)
        startActivityForResult(intent,requestCode);
    }

}
```

<Activity2.java>
```shell
package kiwoong_ex.example2;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;

public class Activity2 extends AppCompatActivity {

    public static final int REQEST_CODE = 2; //다른 액티비티를 띄우기 위한 요청코드

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_2);
    }

    public void onBackbuttonClicked(View v) {
        Intent intent = new Intent(getApplicationContext(), Activity1.class);
        startActivityForResult(intent, REQEST_CODE);
        finish();
    }
}
```
requestCode는 다른 액티비티로 넘어갈 때 보내는 시그널같은것으로 각 Activity마다 고유한 requestCode로 보내줘야 합니다. 

근데 이렇게 하면 Activity를 스택에 쌓듯 계속 호출하는것밖에 안되구요, 마지막줄에 finish();를 붙여 이전에 켜진 Activity를 꺼줘야 무한이 메모리에 Activity가 쌓여 메모리가 터지는 일을 방지할 수 있겠죠?

![결과물](https://github.com/SKKUMathcom/2017-Android-/blob/master/Seminar/Figure/inflation1.png)

실은 이건 그닥 멋진 방법은 아닙니다. activity를 호출하면서 보내는 signal의 유무에 따라 오류처리도 하고 해야하는데 그런게 전혀 없으니까요.

추후에 더 멋진 방법을 알아봅시다.
