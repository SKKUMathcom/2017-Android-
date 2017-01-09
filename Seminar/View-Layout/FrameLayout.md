#FrameLayout

FrameLayout은 가장 단순한 레이아웃형태로, 큰 틀만 주어지고 틀 내에 하나의 뷰만 보여지는 형태입니다. FrameLayout은 배치의 포지션을 따로 생각하지 않기 때문에 큰 frame내에 모든 뷰를 겹처서 올립니다.

아래는 정말 단순한 FrameLayout의 예입니다.

```shell

<?xml version="1.0" encoding="utf-8"?>
<FrameLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    >

    <View
        android:layout_width="100dp"
        android:layout_height="match_parent"
        android:background="#88ff0000"
        
        />
    <View
        android:layout_width="200dp"
        android:layout_height="300dp"
        android:background="#8800ff00"
        />
    <View
        android:layout_width="300dp"
        android:layout_height="100dp"
        android:background="#880000ff"
        />
</FrameLayout>

```

preview를 보면 아래와 같이 모든 뷰가 한곳에 겹쳐져서 배치되는것을 확인할 수 있습니다.

![FrameView](https://github.com/SKKUMathcom/2017-Android-/blob/master/Seminar/Figure/Framelayout1.PNG)

그럼 이걸 어따 쓰냐. 안드로이드에서 지원하는 뷰는 가시성(android:visibility)이 공통된 속성으로 내장되어있습니다. FrameView에서 기본적으로 제공하는 중첩기능과 visibility를 이용해 어떤 구역의 뷰를 전환할 때 사용합니다.

(근데 Relative에서도 중첩은 가능해서 솔직히 왜쓰는지 의문...)

중첩과 visibility를 활용해서 달력하나 만들고 마무리 지읍시다. [여기를 눌러 달력 사진을 받아주세요](https://github.com/SKKUMathcom/2017-Android-/raw/master/Seminar/Figure/%EB%B0%95%EB%B3%B4%EA%B2%80%EB%8B%AC%EB%A0%A5.zip)

잘생긴 박보검님의 사진이 1월부터 12월까지 들어있네요.

이제 프로젝트를 생성하고 xml을 생성합니다.

FrameLayout을 통해 이미지를 보여줄껀데, 파일의 이미지 크기가 900*562 픽셀입니다. 화면에 적절히 보여주기 위해 프레임의 크기를 330*206으로 설정했습니다.

```shell

<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:paddingBottom="@dimen/activity_vertical_margin"
    android:paddingLeft="@dimen/activity_horizontal_margin"
    android:paddingRight="@dimen/activity_horizontal_margin"
    android:paddingTop="@dimen/activity_vertical_margin"
    android:orientation="vertical"
    >
    <FrameLayout
        android:layout_width="330dp"
        android:layout_height="206dp"
        android:layout_gravity="center">
        <ImageView
            android:id="@+id/cc12"
            android:layout_width="match_parent"
            android:layout_height="match_parent"
            android:src="@drawable/c12"
            />
        <ImageView
            android:id="@+id/cc11"
            android:layout_width="match_parent"
            android:layout_height="match_parent"
            android:src="@drawable/c11"
            />
        <ImageView
            android:id="@+id/cc10"
            android:layout_width="match_parent"
            android:layout_height="match_parent"
            android:src="@drawable/c10"
            />
        <ImageView
            android:id="@+id/cc9"
            android:layout_width="match_parent"
            android:layout_height="match_parent"
            android:src="@drawable/c9"
            />
        <ImageView
            android:id="@+id/cc8"
            android:layout_width="match_parent"
            android:layout_height="match_parent"
            android:src="@drawable/c8"
            />
        <ImageView
            android:id="@+id/cc7"
            android:layout_width="match_parent"
            android:layout_height="match_parent"
            android:src="@drawable/c7"
            />
        <ImageView
            android:id="@+id/cc6"
            android:layout_width="match_parent"
            android:layout_height="match_parent"
            android:src="@drawable/c6"
            />
        <ImageView
            android:id="@+id/cc5"
            android:layout_width="match_parent"
            android:layout_height="match_parent"
            android:src="@drawable/c5"
            />
        <ImageView
            android:id="@+id/cc4"
            android:layout_width="match_parent"
            android:layout_height="match_parent"
            android:src="@drawable/c4"
            />
        <ImageView
            android:id="@+id/cc3"
            android:layout_width="match_parent"
            android:layout_height="match_parent"
            android:src="@drawable/c3"
            />
        <ImageView
            android:id="@+id/cc2"
            android:layout_width="match_parent"
            android:layout_height="match_parent"
            android:src="@drawable/c2"
            />
        <ImageView
            android:id="@+id/cc1"
            android:layout_width="match_parent"
            android:layout_height="match_parent"
            android:src="@drawable/c1"
            />
    </FrameLayout>
    <Button
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="NexT"
        android:typeface="serif"
        android:layout_marginTop="30dp"
        android:layout_gravity="center"
        android:onClick="onButton1Clicked"
        />
</LinearLayout>
```

FrameLayout에는 뷰가 앞에꺼부터 쌓이므로 맨 마지막 뷰가 보이게 됩니다. 그래서 12월부터 역순으로 1월까지 ImageView를 만들어줍니다.

ImageView에서 외부의 사진을 가져올 떄는 src이란 속성을 이용합니다.

그리고 이미지를 바꾸게 해줄 Button을 만들어주세요. Button을 클릭했을 때 이미지가 바뀌게 할 것이므로 onClick 속성도 추가해줍니다.

이제 자바파일을 바꿔봅시다.

우리는 앞의장부터 속성을 invisible로 바꿔가면서 달력을 만들꺼기 때문에 각 ImageView를 자바에서 정의하고 넣어줘야돼요

먼저 클래스 전체에서 ImageView를 만들어줍니다. 달력이 invisible인게 1부터 12까지 경우를 나눠야 하므로 imageidx라는 변수도 추가해줍니다. 

``` shell
public class MainActivity extends AppCompatActivity {

    int imageidx = 1;
    ImageView cc1; ImageView cc2; ImageView cc3; ImageView cc4; ImageView cc5; ImageView cc6;
    ImageView cc7; ImageView cc8; ImageView cc9; ImageView cc10; ImageView cc11; ImageView cc12;

```

다음으로는 onCreate에서 각 ImageView 객체에 해당 ImageView의 값을 넣어줍시다.

```shell

    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        cc1 = (ImageView)findViewById(R.id.cc1);
        cc2 = (ImageView)findViewById(R.id.cc2);
        cc3 = (ImageView)findViewById(R.id.cc3);
        cc4 = (ImageView)findViewById(R.id.cc4);
        cc5 = (ImageView)findViewById(R.id.cc5);
        cc6 = (ImageView)findViewById(R.id.cc6);
        cc7 = (ImageView)findViewById(R.id.cc7);
        cc8 = (ImageView)findViewById(R.id.cc8);
        cc9 = (ImageView)findViewById(R.id.cc9);
        cc10 = (ImageView)findViewById(R.id.cc10);
        cc11 = (ImageView)findViewById(R.id.cc11);
        cc12 = (ImageView)findViewById(R.id.cc12);


    }
 ```

그리고 이미지를 변환할 chageImage 메쏘드를 만들어줍니다. imageidx를 통해 switch case문을 통해 구현하며, 각 경우에 따라 해당 ImageView를
Invisible하게 바꿔줍니다.


```

   private void changeImage()
    {
        switch (imageidx) {
            case 1:
                cc1.setVisibility(View.INVISIBLE);
                imageidx++;
                break;
            case 2:
                cc2.setVisibility(View.INVISIBLE);
                imageidx++;
                break;
            case 3:
                cc3.setVisibility(View.INVISIBLE);
                imageidx++;
                break;
            case 4:
                cc4.setVisibility(View.INVISIBLE);
                imageidx++;
                break;
            case 5:
                cc5.setVisibility(View.INVISIBLE);
                imageidx++;
                break;
            case 6:
                cc6.setVisibility(View.INVISIBLE);
                imageidx++;
                break;
            case 7:
                cc7.setVisibility(View.INVISIBLE);
                imageidx++;
                break;
            case 8:
                cc8.setVisibility(View.INVISIBLE);
                imageidx++;
                break;
            case 9:
                cc9.setVisibility(View.INVISIBLE);
                imageidx++;
                break;
            case 10:
                cc10.setVisibility(View.INVISIBLE);
                imageidx++;
                break;
            case 11:
                cc11.setVisibility(View.INVISIBLE);
                imageidx++;
                break;
            case 12:
                cc1.setVisibility(View.VISIBLE); cc2.setVisibility(View.VISIBLE); cc3.setVisibility(View.VISIBLE); cc4.setVisibility(View.VISIBLE);
                cc5.setVisibility(View.VISIBLE); cc6.setVisibility(View.VISIBLE); cc7.setVisibility(View.VISIBLE);cc8.setVisibility(View.VISIBLE);
                cc10.setVisibility(View.VISIBLE);cc11.setVisibility(View.VISIBLE);cc9.setVisibility(View.VISIBLE);
                imageidx= 1;
                break;
        }
    }

```

마지막 12월 사진을 넘길 때에는 12월을 제외한 나머지 ImageView를 Visible하게 바꿔줬습니다.

끝으로 onClick 메소드를 만들어줍니다. onClick에는 chageImage 메소드가 들어가 클릭할 때 마다 이미지가 바뀌게 해줍니다.

``` shell
    public void onButton1Clicked(View v)
    {
        changeImage();
    }

```

![FrameLayout2](https://github.com/SKKUMathcom/2017-Android-/blob/master/Seminar/Figure/Framelayout2.PNG)
어플을 실행하면 잘생긴 박보검형님이 매달 옷을 바꿔입으면서 날짜를 보여주네요 캬... 존잘...
