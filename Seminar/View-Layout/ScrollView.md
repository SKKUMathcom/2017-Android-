
# Scroll View

Scroll view는 뷰의 영역이 한번에 다 보이지 않을 때 스크롤을 이용해서 볼 수 있게 만들기 위해 사용되는 layout입니다. 

Scroll view는 수직으로 길게 펼처진 뷰를 위해 사용하는 ScrollView와 수평으로 길게 늘여진 뷰를 위해 사용하는 HorizontalScrollView 이 두가지 종류가 있습니다.

각각 scrollview는 layout이라기보다는 하나의 view로 보는게 좀더 명확한게, 이 안에는 하나의 뷰밖에 못들어가요. 그래서 여러 뷰가 존재하는 창을 scroll view에 넣고싶으면 일단 해당 뷰를 포함하는 linearlayout을 만든 다음에 이 linearlayout을 scrollview로 받으면 됩니다.

말로하니까 어려우니 예시로 들어갑시다.

``` shell

<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    android:background="#fff">
    <HorizontalScrollView
        android:layout_width="300dp"
        android:layout_height="300dp"
        android:layout_gravity="center|top"
        android:layout_marginTop="15dp"
        android:background="#888"
        >
    <ScrollView
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:id="@+id/scrollimage" >

        <ImageView
            android:id="@+id/imagebox"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            />
    </ScrollView>
    </HorizontalScrollView>

<Button
    android:id="@+id/imageopen"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:text="imagechange"
    android:layout_gravity="center"
    android:layout_marginTop="15dp"
    android:onClick="openbuttonClicked"/>
</LinearLayout>


```

위 예시를 보면 HorizontalScrollView 안에 ScrollView가 그리고 그 안에 ImageView가 있는걸 확인할 수 있습니다. 여러개를 표시하고싶으면 imageView자리에 레이아웃을 만들어 넣으면 되요!!

특징적인거는 각각 Scroll View 에 id를 붙여줬다는 것입니다. 앞의 두 layout에는 id를 만들어주지 않았는데 여기서 만들어주는 이유는 각 scrollview는 scroll view 의 control bar가 존재하는데 이걸 java에서 다뤄주기 위해서 해주는 겁니다.

근께 스크롤바 보이는게 싫다 하시면 id를 안 부여해줘도 되요.

이대로는 스크롤이 잘 작동하는지 확인이 힘드니까 이번꺼는 좀 어려워도 MainActivity.java 파일 가서 기능을 만들어줍시다. 

먼저 저희가 이번에 할걸 간단히 소개하자면, 창에서 button을 클릭하면 사진이 바뀌는걸 만들 생각이에요. 그럼 사진이 있어야겠죠?? 인터넷에서 사진 2개만 받아옵시다.

사진 양식은 가급적이면 bmp파일로 해주세요. 코드가 bmp로 되어있어서 jpg파일로 할 경우 어떻게될지는 잘 몰라욬ㅋㅋ

또 주의할점은 이 사진을 우리는 R.drawable 에서 가져오는데 파일이름이 a-z까지 소문자 알파벳, 0-9까지의 숫자밖에 인식을 못합니다. 파일이름에 주의하세요!!

그럼 다음으로 로컬디스크 C에 들어가서 User -> "해당 User" -> AndroidStudioProjects -> "project name" -> app->src ->main->res-> drawable 에 저장을 해줍시다.

설치과정에서 경로를 수정하신분은 이렇게 안뜨니 검색으로 들어가서 MainActivity.java를 검색하던지 해서 찾아봐요ㅎㅎ

그럼 안드로이드 스튜디오에서 왼쪽 프로젝트 솔루션에 drawable에 다음과 같이 파일 2개가 업로드되는걸 확인할 수 있습니다.

![drawable](https://github.com/SKKUMathcom/2017-Android-/blob/master/Seminar/Figure/process1.PNG)

그다음으로는 java파일을 보겠습니다.


```shell

package kiwoong_ex.test;

import android.content.res.Resources;
import android.graphics.drawable.BitmapDrawable;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.ImageView;
import android.widget.ScrollView;
import android.widget.Toast;
public class MainActivity extends AppCompatActivity {

    ScrollView scrollView1;
    ImageView imageView1;
    BitmapDrawable bitmap1;
    int idx = 0;
    @Override
    protected void onCreate(Bundle savedInstanceState){
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        scrollView1 = (ScrollView)findViewById(R.id.scrollimage);
        scrollView1.setHorizontalScrollBarEnabled(true);
        imageView1 = (ImageView)findViewById(R.id.imagebox);

    }
    public void openbuttonClicked (View v)
    {
        changeImage();
        Toast.makeText(getApplicationContext(),"image is changed", Toast.LENGTH_SHORT).show();
    }
    private void changeImage(){
        Resources res = getResources();
        if(idx == 0) {
            bitmap1 = (BitmapDrawable) res.getDrawable(R.drawable.realgodness);
            int Width = bitmap1.getIntrinsicWidth();
            int Height = bitmap1.getIntrinsicHeight();
            imageView1.setImageDrawable(bitmap1);
            imageView1.getLayoutParams().width = Width;
            imageView1.getLayoutParams().height = Height;
            idx = 1;
        }
        else if (idx==1){
            bitmap1 = (BitmapDrawable) res.getDrawable(R.drawable.soljinim);
            int Width = bitmap1.getIntrinsicWidth();
            int Height = bitmap1.getIntrinsicHeight();
            imageView1.setImageDrawable(bitmap1);
            imageView1.getLayoutParams().width = Width;
            imageView1.getLayoutParams().height = Height;
            idx = 0;
        }
    }
}
```

먼저 메인에 앞서,ScrollView와 ImageView를 컨드롤하기위해서 각각의 객체를 만들어주고, 이미지를 넣기 위해 BitmapDrawable 객체로 Bitmap1을 만들어줍니다.

사진이 바뀌었는지를 확인하기위한 변수로 간단하게 idx를 int형으로 선언해줍시다. 

```shell

    ScrollView scrollView1;
    ImageView imageView1;
    BitmapDrawable bitmap1;
    int idx = 0;

```

그런다음 어플이 실행되는 onCreate에서 각각 객체에 저희가 원하는 대상을 R.id를 이용해 넣어줍니다.

```shell
    protected void onCreate(Bundle savedInstanceState){
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        scrollView1 = (ScrollView)findViewById(R.id.scrollimage);
        scrollView1.setHorizontalScrollBarEnabled(true);
        imageView1 = (ImageView)findViewById(R.id.imagebox);

    }
```

근데 솔직히 scrollview는 선언안해줘도 별로 상관이 없어요. setHorizontalScrollBarEnable 때매 그렇다는데 이거 안해줘도 실행되는 동작은 똑같습니다..

왜냐면 HorizontalScrollView에서 옆으로 scroll되게 해주기 떄문이죠. 그렇다고 setHorizontalScrollBarEnable를 넣으면 HorizontalScrollView를 xml에서 안추가해줘도되냐 그건 또 아니라... 으음.....

여튼 다음으로는 이미지가 변하는 함수를 만들어줍시다. 

``` shell

    private void changeImage(){
        Resources res = getResources();
        if(idx == 0) {
            bitmap1 = (BitmapDrawable) res.getDrawable(R.drawable.realgodness);
            int Width = bitmap1.getIntrinsicWidth();
            int Height = bitmap1.getIntrinsicHeight();
            imageView1.setImageDrawable(bitmap1);
            imageView1.getLayoutParams().width = Width;
            imageView1.getLayoutParams().height = Height;
            idx = 1;
        }
        else if (idx==1){
            bitmap1 = (BitmapDrawable) res.getDrawable(R.drawable.soljinim);
            int Width = bitmap1.getIntrinsicWidth();
            int Height = bitmap1.getIntrinsicHeight();
            imageView1.setImageDrawable(bitmap1);
            imageView1.getLayoutParams().width = Width;
            imageView1.getLayoutParams().height = Height;
            idx = 0;
        }
    }

```

저희는 기존에 저장된 이미지라는 리소스를 사용할거기때문에 res 라는 Resource 객체를 선언해줍니다.

idx ==0은 첫번째이미지이거나 사진이 업로드 되지 않았을 때를 의미합니다.

먼저 bitmap1에 저희가 resource에 저장한 사진을 넣어줍니다. 저는 resource에 realgodness라는 이름으로 저장해놔서 저렇습니다.

다음으로 imageView1의 높이랑 넓이를 설정해주기 위해 원본사진의 높이랑 넓이를 Width, Height라는 이름으로 넣어줍니다.

그다음으로는 imageView1에 각각을 대입해줍니다.

마지막으로 idx를 1로 바꿔, 첫번째 사진이 대입된 상태임을 나타냅니다.

아래 else if 쪽은 위랑 다 똑같아요.

그다음에 버튼을 클릭해줬을 때를 설정해줍시다.

``` shell
    public void openbuttonClicked (View v)
    {
        changeImage();
        Toast.makeText(getApplicationContext(),"image is changed", Toast.LENGTH_SHORT).show();
    }
```

저는 xml에서 button의 onClick속성을 openbuttonClicked 로 했기 때문에 이렇게 생성합니다.

버튼을 클릭하면 이미지가 변하게 changeimage 메쏘드를 먼저 실행해주시고 버튼이 클릭된걸 알 수 있게 toast 메세지를 넣어줍니다.

밑의 사진은 실행결과입니다.

![process2](https://github.com/SKKUMathcom/2017-Android-/blob/master/Seminar/Figure/process2.PNG)

