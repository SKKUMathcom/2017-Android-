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

 activity_1.xml

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
 activity_2.xml

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

Activity1.java

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

Activity2.java

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
# Activity Pop-Up

여지것 우리는 Activity를 만들 때 다음과 같은 클래스를 만들었습니다.

```shell

public class MainActivity extends AppCompatActivity{

.....

}
```

여기서 extends 라는말은 java에서 이후 클래스를 상속한다는 뜻으로, 기본적으로 안드로이드 스튜디오에서는 AppCompatActivity를 상속합니다.

AppCompatActivity는 앱에서 화면을 꽉 차게 차지하는 Activity입니다. 새로운 Activity를 팝업형식으로 만들려면 애초에 extends 부터 새로 해야하는거죠.

이번엔 Activity를 extends 해서 다른 액티비티를 만들어봅시다. 앞서 한 코드에서 Activity2.java의 첫줄 class 선언부분을 다음과 같이 수정해줍니다.

```shell
public class Activity2 extends Activity {
```

Activity를 상속한다고 팝업이 되지는 않습니다. manifest에서 이 액티비티를 팝업이 되는 액티비티로 정해줘야하죠. 이를 결정하는 속성은 android:theme 입니다. 

Manifest에서 activity2의 theme을 @android:style/Theme.Dialog 로 바꿔줍시다.

```shell

<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="kiwoong_ex.example2">

    <application
        android:allowBackup="true"
        android:icon="@mipmap/ic_launcher"
        android:label="@string/app_name"
        android:supportsRtl="true"
        android:theme="@style/AppTheme">
        <activity android:name=".Activity1">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />

                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
        <activity android:name=".Activity2"
            android:theme="@android:style/Theme.Dialog">

        </activity>
    </application>

</manifest>
```

이렇게만 해줘도 아래 사진처럼 Activity를 pop-up시키는건 구현할 수 있습니다.

![Inflation2](https://github.com/SKKUMathcom/2017-Android-/blob/master/Seminar/Figure/inflation2.png)

이번엔 앞에서 못했던 Activity가 종료될 때 행동하는 것 까지 만들어봅시다. 

startActivity와 비슷한 startActivityForResult를 이용합니다.

startActivityForResult는 class를 여는 intent와 이에 해당하는 requestCode를 인풋으로 받는데, 이 Code를 이용해서 intent를 구분합니다.

개념적으로 좀 어려움이 있을것 같으니 코드를 보면서 이해해봅시다.

```shell

package kiwoong_ex.example2;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Toast;

public class Activity1 extends AppCompatActivity {

    public static final int Act2_code = 100; //다른 액티비티를 띄우기 위한 요청코드
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_1);
    }

    public void onButton1Clicked(View v){
        Intent intent = new Intent(getApplicationContext(),Activity2.class); // 새로운 intent를 정의해주는데 그게 Activity2의 class를 불러우는것(Activity2를 띄우는것)
        startActivityForResult(intent,Act2_code);
   }
   protected void onActivityResult(int requestCode, int resultCode, Intent intent) {
        super.onActivityResult(requestCode, resultCode, intent);

        if (requestCode == Act2_code) {
            Toast toast = Toast.makeText(getBaseContext(), "Activity2가 호출됨 " + ", 결과코드 : " + resultCode, Toast.LENGTH_LONG);
            toast.show();

            if (resultCode == RESULT_OK) {
		String message = intent.getExtras().getString("message"); 
		toast = Toast.makeText(getBaseContext(), "message : " + message, Toast.LENGTH_LONG);
                toast.show();
            }
        }

    }

}
```

<public static final int Act2_code = 100;> 를 통해 Activity2를 호출할 때 code값 100을 넣을것을 명명합니다.

그리고 

```shell
    public void onButton1Clicked(View v){
        Intent intent = new Intent(getApplicationContext(),Activity2.class); // 새로운 intent를 정의해주는데 그게 Activity2의 class를 불러우는것(Activity2를 띄우는것)
        startActivityForResult(intent,Act2_code);
   }
```

에서 Activity2.class를 로드하는 intent랑 Act2_code를 같이 startActivityForResult로 넣어준거죠. 그럼 우리가 Activity2를 호출할 때 호출 신호로 100값을 전송하게 되면서 activity를 호출합니다.

Activity1 위에 실행된 Activity2가 종료되면 Activity1의 onActivityResult를 자동으로 호출하는데, 이때 인풋으로 받는 requestCode가 저희가 Activity2를 호출할 때 보낸 100값으로 됩니다.

그래서 

```shell
   protected void onActivityResult(int requestCode, int resultCode, Intent intent) {
        super.onActivityResult(requestCode, resultCode, intent);

        if (requestCode == Act2_code) {
            Toast toast = Toast.makeText(getBaseContext(), "Activity2가 호출됨 " + ", 결과코드 : " + resultCode, Toast.LENGTH_LONG);
            toast.show();

```

이 부분이 Activity2가 종료되면 자동으로 실행되는거죠. 여러 액티비티중 하나를 실행시켜야 될 상황인 경우, 이를 이용하면 어떤 액티비티가실행되었는지를 판별할 수도 있습니다.

또 실행된 액티비티내에서 행동을 구분지을 수도 있습니다. Activity2에서는 종료되면서 대입될 Result값을 setResult로 설정할 수 있는데, 이때 사용되는 resultCode값이 Activity1의 onActivityResult의 resultCode값입니다.

Activity2를 아래와 같이 수정해줍시다.

```shell
import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;

public class Activity2 extends Activity {
    Button backButton;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_2);
    }

    public void onBackbuttonClick(View v) {
        Intent resultIntent = new Intent();
        resultIntent.putExtra("message", "Activity가 정상종료되었습니다.");


        setResult(RESULT_OK, resultIntent); //resultCode 저장.

        finish();
    }


}
```

setResult는 resultCode와 intent를 input으로 받아 액티비티가 종료될 때 이전에 호출된 배경 activity로 두 값을 전달합니다.

이때 전달 방식이 onActivityResult를 이전에 설명했던 requestCode와 setResult로 설정한 resultCode, intent로 실행하는 식이죠.

그러니까 여기서는 Activity1에서 정의된 onActivityResult가 100, RESULT_OK(=-1), resultintent로 실행이 되는겁니다.

따라서, Activity1의 

```shell

   protected void onActivityResult(int requestCode, int resultCode, Intent intent) {
        super.onActivityResult(requestCode, resultCode, intent);

       ....

            if (resultCode == RESULT_OK) {
                String message = intent.getExtras().getString("message");
                toast = Toast.makeText(getBaseContext(), "message : " + message, Toast.LENGTH_LONG);
                toast.show();
            }

	....
        }

    }
``` 
이부분은 Activity2가 종료되면서 Activity1의 onActivityResult가 활성화되고 resultCode가 RESULT_OK와 같으므로 key값이 "message"인 resultintent가 intent에 할당됩니다.

intent의 key가 message인 Extra 의 value는 "Activiy가 정상종료되었습니다." 이므로, message라는 이름의 String객체에 "Activity가 정상 종료되었습니다."가 저장되고, Toast message가 보여집니다.

 
