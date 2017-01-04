# View

## View

:뷰(view)는 사용자 눈에 보이는 화면의 구성요소요소들, 즉 위젯이나 컨트롤, 이미지등을 말합니다.

이러한 뷰를 여러개 포함하고 있는 구성요소를 뷰그룹이라고 합니다.

뷰그룹은 포함하는 뷰의 특성을 다 상속받 즉, 뷰의 모든 속성을 가지고 있습니다.

뷰그룹을 또 뷰로 봐서 상속받고 더 큰 뷰그룹을 생성할 수 있어 이게 물고 물리는 관계를 갖게 되는데 이런 관계덕에 UI를 매우 자연스럽게 구성할 수 있게 됩니다.

***

흔히 많이들 듣는 위젯도 뷰의 일종인데요, 

위젯이란 일반적인 컨트롤의 역할을 하는 뷰를 말합니다. 저번에 했던 button, text등이 위젯이라 할 수 있죠.

이런 위젯을 포함하면서 배치하는 역할을 하는 뷰그룹을 레이아웃이라고 합니다.

간단히 말해서 아이콘같은 구성요소 하나하는 위젯, 그걸 배치한 묶음을 레이아웃이라 생각하면 되요.

그럼 뷰에서 가장 많이 쓰이는 속성인 layout_width, layout_height, id, background에 대해 알아봅시다.

1. layout_width, layout_height

뷰는 뷰그룹이 가지는 공간중 일부 혹은 전체에 위치하는데 이 뷰의 크기를 결정하는 속성이 layout_width(넓이), layout_height(높이)입니다.

layout_width[height]의 값은 match_parent, wrap_content, 그리고 사용자가 지정한 값 이렇게 3가지가 될 수 있습니다.

match_parent: 	layout에 남아있는 여유공간을 다 차지.

wrap_content: 	뷰의 contents 길이 만큼의 공간 차지

사용자 정의: 	숫자+단위 ex) 320px, 160dp etc

		단위:	px(화면 픽셀) 

			dp/dip(160dip화면 기준 1픽셀(화면크기에 비례하여 픽셀 증가: 320dip화면은 2픽셀))

			sp/sip (dp와 유사하나 글꼴에 따라 달라짐)

			in (인치)

			mm (밀리미터)

			em (글꼴과 상관없이 텍스트 크기)

여기서 em과 sp는 글꼴의 크기를 나타낼때 사용되고 뷰의 크기에는 사용되지 않습니다.

실제 앱에는 어떤 화면이든 같은 비율로 보이는 dp가 당연히 가장 많이 사용됩니다.

 
2. ID

안드로이드에 메인으로 쓰이는 언어는 자바인데 xml로 생성된 레이아웃과 뷰를 어떻게 참조할까 생각해본적 있나요?

안드로이드에서는 프로젝트 파일이 빌드될 때 xml레이아웃에 정의된 정보는 내부적으로 해석되어 자바에서 객체를 만듦니다.

이런 과정을 inflation이라고 하는데 쉽게말해 프로젝트를 빌드하면 Android studio가 알아서 xml 내의 정보를 java의 어딘가로 옮겨줘요.

이때 각 구성요소를 구분하기 위해 사용되는게 id입니다. button을 생성하고 xml파일을 보면

``` shell
    <Button
        android:text="Button"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_alignParentTop="true"
        android:layout_alignParentLeft="true"
        android:layout_alignParentStart="true"
        android:layout_marginLeft="12dp"
        android:layout_marginStart="12dp"
        android:layout_marginTop="23dp"
        android:id="@+id/button" />
</RelativeLayout>

```
이렇게 생성이 되는데, 여기서 android:id를 확인해 봅시다.

xml에 정의된 뷰의 id 속성은 R.id.<ID>로 java에서 참조됩니다. 즉 여기서 @+id/button을 통해 R.id에 button이라는 id를 추가하는거죠.

이전에 썻던 id와 같은 이름으로 뷰를 참조하고 싶으면 @id/button 으로 하면 됩니다.

그럼 id를 활용해서 해당 id의 button에 onClick method를 추가해 봅시다.

이전에는 xml에서 button 뷰의 속성에서 onClick을 추가한 뒤 android:onClick = "method_name" 과 같은 식으로 button에서 onClick 을 생성해줬는데요, 이번에는 java파일안에서 추가해보도록 하겠습니다.


MainActivity.java 로 들어가서 아래와 같이 만들어주세요

``` shell

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        
        Button button1 = (Button) findViewById(R.id.button);

        button1.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View v){
                Toast.makeText(getApplicationContext(),"button is clicked",Toast.LENGTH_LONG).show();
            }
        });
    }

}
```

한줄씩 코드를 뜯어보면

protected void onCreate(Bundle savedInstanceState)는 Main Activity가 실행되고 activity_main을 창에 띄웠을 때에 자동으로 시작되는 코드입니다.
 
super.onCreate(savedInstanceState);

setContentView(R.layout.activity_main); 은 모두 activity를 생성하면 기본적으로 만들어지는것이니 스킵하도록 합시다.

***
* Button button1 = (Button) findViewById(R.id.button);

먼저 Button이라는 class로 button1 이라는 object를 만들어 줍니다. 이 button1은 main_activity에서 만든 button이라는 id를 가진 뷰를 참조하도록 하기위해 findViewById로 id를 검색하고 해당 뷰를 button1로 만들어 줍니다.

***
        button1.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View v){
                Toast.makeText(getApplicationContext(),"button is clicked",Toast.LENGTH_LONG).show();
            }
        });


button1을 클릭했을 때의 행동을 만들어 주기위해 setOnClickListener를 생성합니다. setOnClickListener는 OnClickListener라는 객체를 인풋으로 받습니다.

이 다음은 자바의 독특한 문법인데요, 이중에 onClick을 overriding으로 함수를 만들어 주는건데 여기서 click했을 때의 행동을 다시 정의해준다고 생각해주시면 되요.

click된지 확인하기 위해 Toast를 위해 간단한 메세지를 넣어줍니다.

자 이제 이걸 Shift + F10 을 눌러 실행시켜줍니다.

button을 클릭하면 아래 그림처럼 메세지가 뜨는걸 확인할 수 있습니다.

![result](https://github.com/SKKUMathcom/2017-Android-/blob/master/Seminar/Figure/Button_1.png)
