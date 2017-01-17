
## linear layout

layout 중 가장 많이 사용되는 기본 레이아웃으로 각 뷰마다 영역을 지정하고, 제시된 방향에 따라 정렬하는 방식입니다.

## Orientation

Linear-layout은 제시된 방향에 따라 각 뷰를 정렬하는 방식이니 당연히 여기는 android:orientation이 필수적으로 들어가야겠죠.

먼저 아까 사용했던 activity_main.xml의 레이아웃을 linear-layout으로 바꿔줍니다.

xml코드의 맨 바깥쪽 태그를 RelativeLayout에서 LinearLayout으로 바꿔주세요


그리고 방향을 vertical 로 설정한 뒤, 기존버튼을 지우고, Button1, Button2, Button3 세개의 버튼을 만들어 줍시다.

``` shell

<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"  <---(RelativeLaout->LinearLayout)
    xmlns:tools="http://schemas.android.com/tools"
    android:id="@+id/activity_main"
    android:orientation="vertical"                        <------ 여기 필수로 추가!!
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:paddingBottom="@dimen/activity_vertical_margin"
    android:paddingLeft="@dimen/activity_horizontal_margin"
    android:paddingRight="@dimen/activity_horizontal_margin"
    android:paddingTop="@dimen/activity_vertical_margin"
    tools:context="kiwoong_ex.test.MainActivity">

    <Button
        android:text="Button1"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_alignParentTop="true"
        android:layout_alignParentLeft="true"
        android:layout_alignParentStart="true"
        android:layout_marginLeft="12dp"
        android:layout_marginStart="12dp"
        android:layout_marginTop="23dp"
        android:id="@+id/button1"
        />
    <Button
        android:text="Button2"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_alignParentTop="true"
        android:layout_alignParentLeft="true"
        android:layout_alignParentStart="true"
        android:layout_marginLeft="12dp"
        android:layout_marginStart="12dp"
        android:layout_marginTop="23dp"
        android:id="@+id/button2"
        />
    <Button
        android:text="Button3"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_alignParentTop="true"
        android:layout_alignParentLeft="true"
        android:layout_alignParentStart="true"
        android:layout_marginLeft="12dp"
        android:layout_marginStart="12dp"
        android:layout_marginTop="23dp"
        android:id="@+id/button3"
        />
</LinearLayout>              <---(RelativeLaout->LinearLayout)

```

![run1](https://github.com/SKKUMathcom/2017-Android-/blob/master/Seminar/Figure/linear-layout.PNG)

가로방향은 android:orientation을 horizontal로 해주면 되겟죠?
***
*자바로 layout 설정(참고) 

다음으로는 xml이 아닌 자바에서 linearlayout을 설정해줍시다. 아까 뷰에서도 그렇고 xml로 만들수 있는걸 왜 자바코드로 하냐면

xml은 특정 조건에서 뷰를 변경하는걸 만들기가 힘들어요. 그니까 자바에서 하는것도 익혀둘 필요가 있는거죠. 

저번 세미나에서 한것처럼 MainActivity를 복사해서 LinearLayout2라는 이름으로 만들어줍시다. 

시작점을 MainActivity가 아닌 LinearLayout2로 해야 하니까 manifests에서도 변경작업이 필요하겠죠?

Manifests를 열어 

``` shall

        <activity android:name=".MainActivity">  ---> 얘를 <activity android:name=".LinearLayout2">로 고쳐줍시다.
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />     ---> 이게 있는 화면이 이 앱의 메인화면이 됩니다.

                <category android:name="android.intent.category.LAUNCHER" />   ----> 이게 있는 화면이 시작화면이 되고요
            </intent-filter>
        </activity>

```

이제 LinearLayout2.java를 수정해줍시다.

```shall

public class LinearLayout2 extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        // setContentView(R.layout.activity_main); activity_main 없이 하기 위해 하는것이므로 이건 지워주자.

        LinearLayout newLayout = new LinearLayout(this); //새로운 Layout을 만들기 위해 LinearLayout으로 newLayout 객채를 만듦
        newLayout.setOrientation(LinearLayout.VERTICAL); //newLayout의 Orientationd을 vertical로 설정

        LinearLayout.LayoutParams params = new LinearLayout.LayoutParams(LinearLayout.LayoutParams.MATCH_PARENT, LinearLayout.LayoutParams.WRAP_CONTENT);
        //view를 앞으로 만들껀데 이것들의 parameter로는 width랑 height가 필요함. 일일이 정의하기 귀찮으니 params라는 객체를 만들어 각각을 이와같이 해두자(input에 들어가는건 순서대로 width, heigth이다)

        Button button1 = new Button(this); //button1을 만들고
        button1.setText("Button 1"); //그것의 Text를 설정하고
        button1.setLayoutParams(params);  //그것의 parameter (width, height 등을 설정.

        Button button2 = new Button(this); //위와 같다
        button2.setText("Button 2");
        button2.setLayoutParams(params);

        Button button3 = new Button(this);
        button3.setText("Button 3");
        button3.setLayoutParams(params);

        newLayout.addView(button1); //button1을 만들었으니 newLayout에 이 view를 추가
        newLayout.addView(button2);
        newLayout.addView(button3);

        setContentView(newLayout); //newLayout을 onCreate 시 ContentView로 설정.
    }




}
```

타이핑 두번하기힘들어서 주석으로 달아놨으니 주석 참고해주세요 ㅠㅠ 


결과는 아래와 같이 나옵니다.

![run2](https://github.com/SKKUMathcom/2017-Android-/blob/master/Seminar/Figure/linear-layout2.PNG)

### Gravity

Orientation이 view 간의 정렬방향을 설정하였다면 gravity는 대상이 놓인 위치를 결정합니다.(일반적인 프로그래밍에서 align에 해당한답니다)

Gravity는 layout_gravity와 gravity 이 두가지로 나눌 수 있습니다.

* layout_gravity

layout_gravity는 더 상위의 뷰에서 뷰가 match_parent가 아니거나 혹은 여유공간이 있을 때 여유공간내에서 뷰의 위치를 결정합니다.

빠르게 예시로 확인하죠. activity_main.xml에서 button들을 다음과 같이 수정해줍시다.

``` shell

    <Button
        android:text="Button1"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_alignParentTop="true"
        android:layout_alignParentLeft="true"
        android:layout_alignParentStart="true"
        android:layout_marginLeft="12dp"
        android:layout_marginStart="12dp"
        android:layout_marginTop="23dp"
        android:id="@+id/button1"
        android:layout_gravity="right"
        />
    <Button
        android:text="Button2"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_alignParentTop="true"
        android:layout_alignParentLeft="true"
        android:layout_alignParentStart="true"
        android:layout_marginLeft="12dp"
        android:layout_marginStart="12dp"
        android:layout_marginTop="23dp"
        android:id="@+id/button2"
        android:layout_gravity="center"
        />
    <Button
        android:text="Button3"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_alignParentTop="true"
        android:layout_alignParentLeft="true"
        android:layout_alignParentStart="true"
        android:layout_marginLeft="12dp"
        android:layout_marginStart="12dp"
        android:layout_marginTop="23dp"
        android:id="@+id/button3"
        android:layout_gravity="left"
        />

```

각각 button들의 코드 마지막을 확인하면 android:layout_gravity를 설정해준걸 확인할 수 있습니다. 그럼 preview 창이 아래와 같이 바뀐걸 확인 할 수 있습니다.

![layout_gravity](https://github.com/SKKUMathcom/2017-Android-/blob/master/Seminar/Figure/layout_gravity.PNG)

* gravity

이번엔 gravity를 봅시다. activity_main.xml에 대대적인 공사를 해줍시다.

```shall
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:id="@+id/activity_main"
    android:orientation="vertical"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:paddingBottom="@dimen/activity_vertical_margin"
    android:paddingLeft="@dimen/activity_horizontal_margin"
    android:paddingRight="@dimen/activity_horizontal_margin"
    android:paddingTop="@dimen/activity_vertical_margin"
    tools:context="kiwoong_ex.test.MainActivity">

    <Button
        android:text="left|top"
        android:layout_width="match_parent"
        android:layout_height="60dip"
        android:id="@+id/button1"
        android:gravity="left|top"
        />
    <Button
        android:text="center_horizontal|bottom"
        android:layout_width="match_parent"
        android:layout_height="60dip"
        android:id="@+id/button2"
        android:gravity ="center_horizontal|bottom"
        />
    <Button
        android:text="center"
        android:layout_width="match_parent"
        android:layout_height="60dip"
        android:id="@+id/button3"
        android:gravity="center"
        />
    <Button
        android:text="fill"
        android:layout_width="match_parent"
        android:layout_height="60dip"
        android:id="@+id/button4"
        android:gravity="fill"
        />
    <Button
        android:text="right|bottom"
        android:layout_width="match_parent"
        android:layout_height="60dip"
        android:id="@+id/button5"
        android:gravity="right|bottom"
        />
</LinearLayout>

```

느낌이 오나요? gravity는 view 내의 contents의 위치를 결정하는 속성이랍니다. 각각을 살펴보면

right는 오른쪽, top은 위쪽 left, bottom은 당연히 왼쪽 아래쪽이고, center_horizontal은 수평방행에대해 중앙에 위치, fill이 좀 독특한데, fill은 수직 수평방향으로 여유공간만큼 채우기에요. 그래서 fill이랑 어떤걸 쓰든 안먹혀요
view는 contents가 꽉찬걸로 인식을 하기 때문에

키보드에 backspase 옆의 |를 이용해서 여러개의 속성을 한꺼번에 부여할 수 있습니다.

* 그 외 layout 안에서 배치에 필요한 속성


		android:baselineAligned="true" -> 추가되는 view들의 contents의 아랫줄 맞추기

		android:baselineAlignedChildIndex="숫자" -> baseline을 몇번째 위젯에 정렬을 맞출지를 결정

		android:measureWithLargestChild="true" -> view의 크기 통일시켜줌

### margin/padding

margin과 padding은 둘다 뷰의 여유공간을 두는것과 관련이 있습니다.

* margin

margin은 layout_gravity랑 비슷하다고 보시면 되요. 뷰를 포함하는 상위뷰 내에서 여유공간을 어떻게 배치할것인지를 얘기하는거죠

* padding

반면에 padding은 gravity와 비슷하다고 보시면 되요. 뷰 내에서 contents를 배치할때 얼마나 여유공간을 둘지를 결정하는거죠

둘이 한꺼번에 예시를 봅시다.

``` shell

<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:id="@+id/activity_main"
    android:orientation="vertical"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context="kiwoong_ex.test.MainActivity">

    <Button
        android:text="I'm tired"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:id="@+id/button1"
        android:padding="20dp"
        />
    <Button
        android:text="really tired"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:id="@+id/button2"
        android:layout_margin="28dp"
        />
    <Button
        android:text="Ha...."
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:id="@+id/button3"
        android:padding="28dp"
        android:layout_marginLeft="128dp"
        />

</LinearLayout>

```
결과값입니다.

![padding](https://github.com/SKKUMathcom/2017-Android-/blob/master/Seminar/Figure/margin_padding.PNG)


### weight

후... 드디어 길고긴 linear-layout의 마지막인 weight입니다.

weight는 가중치에 따라 크기를 결정하는 속성인데요, 레이아웃의 정렬방향에 따라 가중치의 크기만큼 결정짓는 방식이랍니다.

이것도 바로 예시를 보죠

``` shell

<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:background="#00d15e"
    android:layout_width="match_parent"
    android:layout_height="200dp"
    android:orientation="vertical"
    android:weightSum="100"
    >

    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:orientation="horizontal"
        android:layout_weight="50"
        >
        <TextView
            android:layout_width="wrap_content"
            android:layout_height="match_parent"
            android:text="1"
            android:id="@+id/button"
            android:layout_weight="1"
            android:background="@color/colorAccent"
            />
        <TextView
            android:layout_width="wrap_content"
            android:layout_height="match_parent"
            android:text="2"
            android:id="@+id/button1"
            android:layout_weight="2"
            android:textColor="#ffffff"
            android:background="#000000"
            />
        <TextView
            android:layout_width="wrap_content"
            android:layout_height="match_parent"
            android:text="3"
            android:id="@+id/button2"
            android:layout_weight="3"
            android:background="#ffffff"
            />

    </LinearLayout>
    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:orientation="horizontal"
        android:layout_weight="50"
        android:weightSum="6"
        >
        <TextView
            android:layout_width="wrap_content"
            android:layout_height="match_parent"
            android:text="1"
            android:id="@+id/button3"
            android:layout_weight="1"
            android:background="#f00000"
            />
        <TextView
            android:layout_width="wrap_content"
            android:layout_height="match_parent"
            android:text="1"
            android:id="@+id/button4"
            android:layout_weight="1"
            android:background="#0f0000"
            />
        <TextView
            android:layout_width="wrap_content"
            android:layout_height="match_parent"
            android:text="1"
            android:id="@+id/button5"
            android:layout_weight="1"
            android:background="#00f000"
            />
        <TextView
            android:layout_width="wrap_content"
            android:layout_height="match_parent"
            android:text="1"
            android:id="@+id/button6"
            android:layout_weight="1"
            android:background="#000f00"
            />
        <TextView
            android:layout_width="wrap_content"
            android:layout_height="match_parent"
            android:text="1"
            android:id="@+id/button7"
            android:layout_weight="1"
            android:background="#0000f0"
            />
        <TextView
            android:layout_width="wrap_content"
            android:layout_height="match_parent"
            android:text="1"
            android:id="@+id/button8"
            android:layout_weight="1"
            android:background="#00000f"
            />

    </LinearLayout>

</LinearLayout>
```

![weight](https://github.com/SKKUMathcom/2017-Android-/blob/master/Seminar/Figure/weight.PNG)


weightsum은 해당 layout의 총합을 지정하고 나머지부분은 공백으로 채우는걸 의미합니다.

여기서는 하나의 큰 layout안에 2개의 layout을 넣고 (layout은 뷰그룹이고 뷰그룹도 뷰니까 이런게 가능하죠) 

각각의 layout에 weight를 50씩 줘서 weightsum을 맞췄습니다.

첫번째 레이아웃에는 textview 3개를 각각 1,2,3의 weight를 주었고 두번째 레이아웃에는 6개의 textview를 1씩 weight를 줬습니다.

위의 사진을 보면 첫번째 레이아웃의 뷰가 약 1:2:3의 비율로 맞춰진걸 볼 수 있습니다.

주의하실점은 사용되는 뷰 혹은 위젯의 종류에 따라 weigth로 인해 차지하는 비율이 서로 다르므로 여러종류의 위젯을 쓸 때에는 preview를 확인해가면서 weight를 조정하던지 layout_width와 layout_height로 비율을 맞춰야 합니다.
