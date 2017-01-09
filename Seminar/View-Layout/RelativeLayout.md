# Relative Layout

Relative Layout는 뷰를 순차적으로 배치하는 linear layout과 다르게 특정 뷰를 지정하고 그 뷰와의 배치를 조정하는 방식의 레이아웃입니다. 

이때 배치의 기준이 되는 뷰는 독립된 다른 뷰가 될 수도 있고 부모컨테이너가 될 수도 있습니다.

다음은 Relative layout을 이용한 코드입니다.

```shell

<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:padding="10dp"
    android:background="@drawable/background">

    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Where to go?"
        android:layout_marginTop="15dp"
        android:gravity="center_horizontal"
        android:textSize="18dp"
        android:textStyle="italic"
        android:textColor="#ffffff"
        android:layout_alignParentTop="true"
        />
    <RelativeLayout
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_centerInParent="true"
        android:padding="10dp"
        android:background="#88ffffff"
        >
        <TextView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:id="@+id/start_point"
            android:paddingTop="4dp"
            android:text="Starting Point: "
            android:textColor="#ff222222"
            android:textSize="18dp"
            />
        <EditText
            android:layout_height="wrap_content"
            android:layout_width="match_parent"
            android:layout_toRightOf="@id/start_point"
            android:layout_alignBaseline="@id/start_point"
            android:id="@+id/startinput"
            android:layout_marginLeft="4dp"
            />
        <TextView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:id="@+id/destination"
            android:text="destination:"
            android:textSize="18dp"
            android:textColor="#ff222222"
            android:paddingTop="16dp"
            android:layout_below="@id/start_point"
            />
        <EditText
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:layout_toRightOf="@id/destination"
            android:layout_alignBaseline="@id/destination"
            android:layout_marginLeft="4dp"
            android:id="@+id/destedit"
            />
        <Button
            android:layout_width="30dp"
            android:layout_height="30dp"
            android:id="@+id/findbutton"
            android:layout_below="@id/destination"
            android:layout_alignParentLeft="true"
            android:layout_marginLeft="20dp"
            android:layout_marginTop="10dp"
            android:background="@drawable/travelicom"
            android:layout_margin="15dp"
            />
        <Button
            android:layout_width="40dp"
            android:layout_height="40dp"
            android:id="@+id/resetbutton"
            android:background="@drawable/reseticon"
            android:layout_below="@id/destedit"
            android:layout_alignParentRight="true"
            />

    </RelativeLayout>
</RelativeLayout>

```

이미지는 네이버에서 배경화면 찾아서 아무거나 긁어서 했구 아이콘도 구글가서 free icon 아무거나 긁어서 했어요ㅎㅎ 혹시 실습을 위해 파일이 필요하시면 알아서 구하시길 바랍니다.

아래 사진은 결과물입니다.

![result](https://github.com/SKKUMathcom/2017-Android-/blob/master/Seminar/Figure/relative1.PNG)

전체 코드는 Relative layout 2개의 계층적 구조로 이뤄져있고 제일 바깥의 Relative layout에는 제목을 나타내는 TextView와 또다른 RelativeLayout으로 구성되어 있습니다.

안쪽 RelativeLayout에는 2개의 TextView와 2개의 EditText, 2개의 button으로 이뤄져있습니다.

그럼 코드를 하나씩 보겠습니다.

먼저 첫번째 Relative의 속성입니다.

```shell

<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:padding="10dp"
    android:background="@drawable/background">

```

맨 윗줄은 늘 보는 xml 버젼하고 아래 코드가 인코딩된 형식이고, 다음줄은 relativelayout의 참조위치이고 아래 들어갈 툴들이며 4번째줄부터 속성입니다.

이전에 못보던 부분은 android:background에서 @drawable을 참조했다는 건데요, drawable에 background라는 이름의 이미지파일을 참조한다는 얘기가 됩니다.

drawable은 앱에서 사용될 이미지 리소스들을 관리하는 저장소인데요, 따로 변경하지 않았다면 C->User->"USER NAME"->Android Studio->"PROJECT NAME"->app->src->main->res->drawable 이 됩니다.

Relative Layout 내의 뷰는 안에 있는 다른 뷰나 부모컨테이너의 위치를 참조한다고 했는데 이제 다음 코드들을 봅시다.

```shell
    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Where to go?"
        android:layout_marginTop="15dp"
        android:gravity="center_horizontal"
        android:textSize="18dp"
        android:textStyle="italic"
        android:textColor="#ffffff"
        android:layout_alignParentTop="true"
        />
```

바로 아래 TextView의 속성인데, 여기 보면 layout_alignParentTop이라는 속성이 있습니다.

alignParent~~~ 는 부모컨테이너의 ~~~의 위치에 뷰를 맞춘다는 얘기입니다. 즉 alignmentParentTop은 부모컨테이너와 top을 맞춰 맨위에 배치, alignmentParentBottom은 bottom을 맞춰 맨 아래 배치한다는 말이죠.

```shell
    <RelativeLayout
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_centerInParent="true"
        android:padding="10dp"
        android:background="#88ffffff"
        >
```
그 다음 나오는 RelativeLayout에도 부모컨테이너를 참조하는 속성이 나오는데 바로 layout_centerInParent입니다. 이는 부모 컨테이너의 가운데에 뷰를 배치하는지를 물어보는 속성입니다.

RelativeLayout에서 부모컨테이너를 참조해 위치를 결정하는 속성들은 다음과 같습니다.


layout_~~~      | 설명
------------------:|:------------------------
alignParentTop    | 부모컨테이너의 위쪽과 뷰의 위쪽을 맞춤
alignParentBottom | 부모컨테이너의 아래쪽과 뷰의 아래쪽을 맞춤
alignParentLeft   | 부모컨테이너의 왼쪽과 뷰의 왼쪽을 맞춤
alignParentRight  | 부모컨테이너의 오른쪽과 뷰의 오른쪽을 맞춤
centerHorizontal  | 부모 컨테이너의 수평방향 가운데에 뷰를 배치
centerVertical    | 부모컨테이너의 수직방향 가운데에 뷰를 배치
centerInParent    | 부모컨테이너의 정가운데에 뷰를 배치

안쪽 RelativeLayout의 안에있는 뷰는 서로 다른 뷰와의 위치관계를 통해 뷰를 배치합니다. start_point라는 id의 텍스트뷰 옆에 startinput이라는 EditText를, destination이라는 텍스트뷰 옆에 destedit을 배치하는 식이죠. 

이런 관계를 위해서는 해당 뷰의 어느쪽에 위치하는지를 나타내는 속성 (Ex layout_toRightOf. layout_below 등등)과 기준이 되는 뷰가 필요하기 때문에 기준이 되는 뷰는 지칭 가능한 ID가 존재하여야 합니다.

이런 기준 뷰의 ID를 값으로 가지는 배치 속성은 다음과 같습니다.

layout_~~ | 설명
-------:|:------
above | 위쪽에 배치
below | 아래쪽에 배치
toLeftOf | 왼쪽에 배치
toRightOf | 오른쪽에 배치
alignTop | 위쪽을 맞춤
alignBottom | 아래쪽을 맞춤
alignLeft | 왼쪽을 맞춤
alignRight | 오른쪽을 맞춤
alignBaseline | "컨텐츠의" 아랫쪽을 맞춤

alignBaseline은 조심해야하는게 컨텐츠의 아래쪽을 맞추는거라 이미지등을 컨텐츠로 갖거나 내용물이 없는 경우 정렬이 마음대로 안될 수도 있습니다.



