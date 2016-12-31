# 생성부터 실행까지

## 프로젝트 만들기

안드로이드 스튜디오도 설치했으니 앱을 위한 프로젝트를 만들어봅시다.안드로이드 스튜디오를 실행 시키고 제일 첫번째 메뉴인 "Start a new Android Studio project"를 눌러줍시다

![newproject](https://github.com/lkiung/SKKUMathcom-AndroidApp/blob/master/Seminar/Figure/2-1.PNG)

Application name은 저희가 만들 어플리케이션의 이름이 되니 신중히 만들어 주시구요
Company domain은 이 어플을 만든 단체의 이름입니다. 이 두개를 조합해서 package name을 만드는데
이 package name이 단말기에서 어플을 구분해주는 역할을 합니다. package name은 자동으로 설정되며 edit을 눌러 수동으로 수정할 수 있습니다.

Next를 누르면 어플리케이션이 사용될 단말기의 종류를 고르는 화면이 나옵니다.
![FormFactors](https://github.com/lkiung/SKKUMathcom-AndroidApp/blob/master/Seminar/Figure/2-2%20HW.PNG)

저희가 만들려고 하는건 phone의 application이니 "phone and tablet"을 선택합시다.

다음화면에서는 앱을 처음 실행했을 떄의 화면의 모양을 선택합니다. 각 화면은 Android Studio에서 제공하는 xml 양식이며 xml 코딩능력이 뛰어나다면 직접 customizing해도 됩니다.
저희는 기본적인 어플을 실행할 것이니 "Empty Activity"를 선택해 줍니다. 

![xmlact](https://github.com/lkiung/SKKUMathcom-AndroidApp/blob/master/Seminar/Figure/2-3.PNG)

그럼 Activity Name과 Layout Name을 지정해줘야 하는데 Activity name은 저희가 App을 실행할 main JAVA class를 의미하고 Layout Name은 전 페이지에서 설정해준 layout의 이름을 의미하는데 별 큰 지장없으니 원하는 이름으로 수정하고 finish를 눌러줍니다.

그럼 project생성이 완료되엇습니다. Android Studio에서는 처음 프로젝트를 생성할 때 default로 Hello World라는 text가 있는 app으로 생성하므로 hello world를 치는건 생략합니다.

![2-4](https://github.com/lkiung/SKKUMathcom-AndroidApp/blob/master/Seminar/Figure/2-4.PNG)

화면이 아무것도 안뜬다면 그림에서 보이는것 처럼 (1)project를 누르고 (2)app을 누르면 java아래 저희가 생성한 파일들이 있는걸 확인 할 수 있습니다.

## 실행환경 구축
이제 프로젝트를 생성하였으니 프로젝트를 실행할 환경을 구축하기 위해 에뮬레이터를 만들어 줍시다.

위 사진의 (3)"AVD Manager" 아이콘을 클릭해 줍시다. AMD Manager는 구글에서 판매하는 스마트폰 단말기의 환경을 가상머신을 통해 PC에서 구현시켜줍니다.
 가상머신으로 쓸 단말기를 설정하는 과정이므로 create virtual device 후 next next해서 default값으로 처리해줍니다.

그럼 이제 가상 메모리를 설정해주는 단계에 오는데 이건 많이 하면 어플을 실행하는 동안 PC가 느려지고 적게하면 가상머신에서 어플실행이 안될수 있으니 적절히 설정해줍니다.
![virtualmemory](https://github.com/lkiung/SKKUMathcom-AndroidApp/blob/master/Seminar/Figure/2-5%20%EA%B0%80%EC%83%81%20%EB%A9%94%EB%AA%A8%EB%A6%AC.PNG)

메모리가 너무 과하다 혹은 모자라다 싶으면 안드로이드가 설치된 폴더 (default: C:/Program Files/Android/Android Studio)에서 bin폴더로 들어가 studio64.exe.vmoptions파일을 관리자권한으로 메모장을이용해 실행해줍니다.
여기서 -Xmx 이후의 값을 증가시키면 됩니다. 

이 과정을 다 마치면 AMD Manager에 device가 하나 추가된걸 확인할 수 있는데, 우측 재생모양의 아이콘을 눌러주면 가상 머신이 실행되는걸 확인할 수 있습니다.
![2-6](https://github.com/lkiung/SKKUMathcom-AndroidApp/blob/master/Seminar/Figure/2-6.PNG)

## 실행

어플리케이션 실행은 간단합니다. 실행환경을 모두 구축하였으면 아래 사진에서 보이는 재생모양 아이콘(run)을 클릭하거나 혹은 shift+F10을 눌러줍니다.
실행할 에뮬레이터를 클릭하면 에뮬레이터로 어플리케이션이 실행되는걸 확인할 수 있습니다.

![2-7](https://github.com/lkiung/SKKUMathcom-AndroidApp/blob/master/Seminar/Figure/2-7.PNG)

## 뭐라도 해보자

마지막으로 어플에 간단한 기능을 추가해봅시다.
우리가 첫날 할 내용은 어플내에 화면이동입니다. 

먼저 새로운 페이지를 생성합니다. Android app에서는 activity하나가 하나의 페이지가 됩니다.
새로운 activity를 만드는건 어려우니 기존에 있던 activity를 복사합시다.
![activitycopy](https://github.com/lkiung/SKKUMathcom-AndroidApp/blob/master/Seminar/Figure/2-8.PNG)
그림과 같이 프로젝트 솔루션에서 MainActivity를 복사해 SecondActivity를 만들고 activity_main.xml을 복사해 activity_second.xml을 만들어줍니다.

그럼 이제 main activity에서 다음 화면으로 넘어갈 버튼을 만들어줍시다. acitivity_main.xml의 design에서 "hello world"를 지우고 버튼을 드래그해 만들어줍니다.
![makebutton](https://github.com/lkiung/SKKUMathcom-AndroidApp/blob/master/Seminar/Figure/firstpage.PNG)

버튼이 좀 너무 기본값으로 되있으니 바꿔봅시다.
xml우측창은 각 component의 properties를 나타냅니다. 하단의 view all properties를 눌러 여러 사항들을 바꿔주죠.

저는 id를 PageChange, layout_width를 match_parent로, text를 눌러봐 로 바꿨습니다. 

그리구 가장 중요한건 onClick에 버튼을 클릭할 때의 event 이름을 정해줘야합니다. 전 onClick을 onButtonClicked로 바꿨습니다.

![property](https://github.com/lkiung/SKKUMathcom-AndroidApp/blob/master/Seminar/Figure/2-10.PNG)

이 xml파일의 코드를 보면 중간에 
```shell

    <Button
        android:text="눌러봐"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_centerVertical="true"
        android:layout_centerHorizontal="true"
        android:id="@+id/PageChange"
        android:onClick="onButtonClicked"
        android:allowUndo="false" />
```

로 바뀐걸 확인할 수 있습니다.

xml파일을 변경해줬으면 버튼을 클릭하는 이벤트가 발생했을 때에 행동을 할 함수를 Java내에 만들어 줘야 합니다.

저희가 PageChange를 클릭했을 때의 이벤트는 onButtonClicked로 명명을 하였기에 Main Activity의 아래에 onButtonClicked class를 만들어줍니다.
```shell
public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }
    public void onButtonClicked(View v)
    {
    }
}
```


**Toast 추가하기**

어플을 클릭해서 단순히 넘어가니 심심하다,휴대폰 충전기를 연결하면 휴대폰이 충전된다는 메세지가 팝업되듯이 버튼을 클릭하면 메세지가 떳으면 좋겠다 하면 Toast를 사용할 수 있습니다.

Toast는 안드로이드에서 제공하는 간단한 메세지위젯으로 android.widget.Toast를 import하여 사용할 수 있습니다.

Toast로 메세지를 띄우려면 해당 이벤트에 Toast.makeText 함수를 쓰면 됩니다.

저희 케이스는 아래와 같이 하면 되죠


```shell
 public void onButtonClicked(View v)
    {
        Toast.makeText(this,"다음화면으로 넘어갑니다.",Toast.LENGTH_LONG).show();
```
makeText의 input은 먼저, 해당 buffer, 메세지 혹은 메세지가 들은 object, option 순입니다.

activity의 버튼에대한 action을 추가해줍시다. Android에서는 이런 action을 Intent라는 class에서 처리합니다.

onButtonClicked의 class를 다음과 같이 수정해줍니다.

```shell
    public void onButtonClicked(View v)
    {
        Toast.makeText(this,"다음화면으로 넘어갑니다.",Toast.LENGTH_LONG).show();
        Intent pageintent = new Intent(getApplicationContext(),SecondActivity.class);
        startActivity(pageintent);
    }
```

startActivity는 버튼을 눌렀을 때 함수의 input으로 들어가는 Intent를 실행해주고
위의 줄은 Intent는 SecondActivity를 실행함을 의미합니다.


이제 두번째 페이지를 위해 SecondActivity.java를 살펴봅시다.

SecondActivity는 activity를 create할 때 activity_second.xml을 화면에 출력하므로 onCreate class를 바꿔줍니다.

```shell
public class SecondActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_second);
    }

}
```

그리고나서 activity_second에 button을 클릭했을 때의 event를 MainActivity때 처럼 다뤄줍니다.

저는 activity_second.xml의 button을 아래와 같이 추가해줬습니다.

```shell
    <Button
        android:text="뒤로 가기"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:id="@+id/backButton"
        android:onClick="onButtonClicked"
        android:layout_alignParentTop="true"
        android:layout_alignParentStart="true"
        android:layout_marginTop="205dp"
        android:layout_alignParentLeft="true" />
```

SecondActivity.java도 수정해줍니다.

이전과의 차이점은 SecondActivity는 MainActivity위에 실행되는것(system의 back버튼 누르면 MainActivity로 넘어감)이기 때문에 finish();만 해주면 됩니다.

```shell
public class SecondActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_second);
    }
    public void onButtonClicked(View v)
    {
     //여기에 이제 원하는 action을 넣어줍니다.   
    }

}

```

끝으로 전체 어플에 2개의 Activity가 있다는걸 알려줘야 합니다.

이는 프로젝트 솔루션에서 manifest에서 설정할 수 있습니다.

![manifest](https://github.com/lkiung/SKKUMathcom-AndroidApp/blob/master/Seminar/Figure/2-12.PNG)



허전한데 첫페이지에 버튼하나 추가합시다. 버튼에는 인터넷을 접속하는 기능을 넣읍시다. 

하던데로 xml에 버튼을 추가하고 속성을 끄적끄적합니다.

![page](https://github.com/lkiung/SKKUMathcom-AndroidApp/blob/master/Seminar/Figure/2-11.PNG)

제 경우의 xml의 버튼값은 다음과 같습니다.

```shell
    <Button
        android:text="go to Homepage"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_above="@+id/PageChange"
        android:layout_centerHorizontal="true"
        android:layout_marginBottom="71dp"
        android:id="@+id/Net_But"
        android:onClick="NetButtonClicked" />
```

이제 java파일도 수정해줍니다.

```shell
    public void NetButtonClicked(View v)
    {
        Toast.makeText(this,"홈페이지로 접속합니다.",Toast.LENGTH_LONG).show();
        Intent netintent = new Intent(Intent.ACTION_VIEW, Uri.parse("https://github.com/lkiung/SKKUMathcom-AndroidApp"));
        startActivity(netintent);
    }
```

button의 onClick에 맞춰 NetButtonClicked class를 추가해주고 Intent를 만들어 줬습니다.

이 Intent는 표시된 uri에 해당하는 홈페이지를 접속하는 intent입니다.

이제 앱을 실행해 봅시다

![test1](https://github.com/lkiung/SKKUMathcom-AndroidApp/blob/master/Seminar/Figure/2-13(1).PNG)

![test2](https://github.com/lkiung/SKKUMathcom-AndroidApp/blob/master/Seminar/Figure/2-13(2).PNG)

와우... 첫날만에 기본 어플을 만들수 있게 되었네요


**한글 깨짐 현상**

한글 깨짐 현상이 나타날수 있는데 이는 안드로이드 설치경로로 들어가서
plugins/android/lib/layoutlib/data/fonts의 font.xml을 관리자 권한으로 실행해 줍니다.

350번째줄 정도에 
```shell
    <family lang="ko">
        <font weight="400" style="normal" index="1">NotoSansCJK-Regular.ttc</font>
    </family>
```

을 발견할 수 있는데 이를 

```shell
    <family lang="ko">
        <font weight="400" style="normal" index="1">NanumGothic.ttf</font>
    </family>
```
로 수정해줍니다.


관리자권한으로 실행이 어렵다 하면 외부에 저장하구 옮겨주면 되요
신중하게 하시길.. 하다 뻑나서 전 다시 설치했습니다ㅠㅠㅠ



