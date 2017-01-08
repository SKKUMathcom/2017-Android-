# tablelayout

tablelayout은 엑셀의 시트처럼 layout을 표로 나타내는 방법입니다. 

각 row는 균등한 구간으로 나눠지며, 각 row에 뷰를 채워 표 형식으로 나열합니다.

column의 갯수는 전체 row에서 가장 많이 채워진 view에 의해 결정됩니다. 

 
table layout을 활용한 간단한 예시를 보시죠.

``` shell
<?xml version="1.0" encoding="utf-8"?>
<TableLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:stretchColumns="1"
    >
    <TableRow>
        <TextView
            android:text="Mathematic Circle "
            android:textSize="24dp"
            android:textColor="#000"
            />
        <TextView
            android:text="Mathematic Circle "
            android:textSize="24dp"
            android:textColor="#000"
            />
    </TableRow>

    <TableRow>
        <TextView
            android:text=" Name"
            android:textSize="24dp"
            android:gravity="left"
            />

        <TextView
            android:text="Activity "
            android:textSize="24dp"
            android:gravity="left"
            />
    </TableRow>
    <TableRow>
        <TextView
            android:text=" Mathcom"
            android:textSize="24dp"
            android:gravity="left"
            />
        <TextView
            android:text="Study , alchol "
            android:textSize="24dp"
            android:gravity="left"
            />
    </TableRow>
    <TableRow>
        <TextView
            android:text=" Zebra"
            android:textSize="24dp"
            android:gravity="left"
            />
        <TextView
            android:text="baseball , alchol "
            android:textSize="24dp"
            android:gravity="left"
            />
    </TableRow>
    <TableRow>
        <TextView
            android:text=" Sigma"
            android:textSize="24dp"
            android:gravity="left"
            />
        <TextView
            android:text="soccer , alchol "
            android:textSize="24dp"
            android:gravity="left"
            />
    </TableRow>
    <TableRow>
        <TextView
            android:text=" Youth"
            android:textSize="24dp"
            android:gravity="left"
            />
        <TextView
            android:text="basketball,alchol"
            android:textSize="24dp"
            android:gravity="left"
            />
    </TableRow>
    <TableRow>
        <TextView
            android:text=" N -divided note"
            android:textSize="24dp"
            android:gravity="left"
            />
        <TextView
            android:text="singing, alchol "
            android:textSize="24dp"
            android:gravity="left"
            />
    </TableRow>
</TableLayout>

```

오른쪽 preview를 보시면 
![table_ex1](https://github.com/SKKUMathcom/2017-Android-/blob/master/Seminar/Figure/table_ex1.png)

위 사진과 같이 점선으로 테이블이 만들어진것을 볼 수 있습니다. table-layout은 이와 같이 맨 위의 row의 view에 맞춰 column의 크기를 결정하고, 그 크기에 맞춰 table을 생성하는 역할을 합니다. 

속성에 보시면 linear에서와 다르게 ** android:stretchColumns="*" ** 를 볼 수 있습니다. 이는 " " 안에 들어가는 열을 부모 컨테이너의 넓이에 맞춰 강제로 확장한다는 의미입니다. *는 모든 열을 가르킨다는 의미이며, 열은 0부터 시작합니다.

잘 와닿지 않는다면 " " 안의 값을 0으로 바꿔 preview를 보고 1로 바꿔 preview를 확인해보세요. 

0으로 할 때에는 첫번째 column의 여백이 늘어나는것을, 1로 할 때에는 두번째 column의 여백이 늘어나는것을 확인할 수 있습니다. 

유사한 속성으로는 android:shrinkColumn 도 있습니다. 이건 부모컨테이너에 맞춰지게끔 해당 column의 폭을 줄이는 기능을 해요. 

각 row는 <TableRow>로 구분합니다. <TableRow>와 </TableRow> 사이에 뷰를 넣어 column을 채울 수 있죠. TableRow는 특징이 뷰인 주제에 뷰에서 필수인 layout_height, layout_width값을 설정할 수 없어요. TableRow는 자동적으로 layout_height는 wrap_content로 설정됩니다.

그래서 TableRow의 크기를 변경하고프면 그 안에 뷰를 생성한 뒤에 뷰의 android:layout_height, width 를 설정해 주면 되요.

좀 개인적으로 불만인건 TableRow의 색을 못넣는건데 이건 그냥 빈 TextView를 생성하여 column의 갯수를 맞춰준 다음에 그것들의 배경을 설정해야할거같습니다. 하.... 이건 좀 후지네 ㅡㅡ

또 다른 기능으로는 layout_span 과 layout_column이 있습니다. layout_span은 해당 뷰가 차지하는 column의 갯수를 몇개까지 늘리는지를 결정하는 속성이며, layout_column은 해당 뷰가 몇번째 부터 시작할 지를 결정합니다.

아래 예시는 이것들을 이용해 만든 로그인 창입니다.

```shall
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical">
    <TextView
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:paddingTop="5dp"
        android:paddingLeft="5dp"
        android:text="Login "
        android:background="#000"
        android:textColor="#999"
        />
    <TableLayout
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:background="#000000"
    android:stretchColumns="*"
    >

    <TableRow>
        <TextView
            android:text="ID"
            android:layout_marginLeft="10dp"
            android:textColor="#fff"
            android:layout_height="50dp"
            android:textSize="24dp"/>
        <EditText
            android:text="______________________________"
            android:layout_span="2"
            android:textColor="#fff"
            />
    </TableRow>
    <TableRow>
        <TextView
            android:text="PassWord"
            android:layout_marginLeft="10dp"
            android:textColor="#fff"
            android:layout_height="50dp"
            android:textSize="24dp"/>
        <EditText
            android:text="______________________________"
            android:layout_span="2"
            android:textColor="#fff"
            />    </TableRow>
    <TableRow>
        <Button
            android:text="Sign In"
            android:layout_marginLeft="10dp"
            android:textColor="#00f"
            android:layout_height="50dp"
            android:textSize="20dp"
            android:layout_column="1"/>
        <Button
            android:text="Sign up"
            android:layout_marginLeft="10dp"
            android:textColor="#000066"
            android:layout_height="50dp"
            android:textSize="20dp"
            android:layout_column="1"
            android:layout_marginRight="10dp" />
    </TableRow>
    </TableLayout>
</LinearLayout>
```

TableLayout 또한 뷰이므로 다른 layout속에 넣을 수 있습니다. 

![table_ex2](https://github.com/SKKUMathcom/2017-Android-/blob/master/Seminar/Figure/table_ex2.png)
