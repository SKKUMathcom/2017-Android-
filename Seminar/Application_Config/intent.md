#Intent

오늘 다룰 내용은 인텐트입니다. intent의 사전적 의미는 의지, 목적, 계획이죠? 즉 인텐드는 무언가 작업을 수행하기 위해 사용되는 일종의 전달수단이 됩니다.

인텐트는 android.content.intent라는 패키지에 정의되어 있으며 어플리케이션 구성요소간 작업을 수행하기 위한 정보를 전달하는 역할을 합니다. 이 인텐드를 변수로 받아 작업을 수행하는 대표적인 메소드는 다음과 같습니다.

method(function) | 설명
-------:|:------
startActivity() | 액티비티를 화면에 띄울 때 사용
startService()| 해당 서비스를 시작할 때 사용. 
bindService() | 프로세스간 통신을 위해 동작주인 서비스에 대해 제어하는 작업을 수행. 다른 기기에서도 원격조정하거나 하는식으로 사용하나봅니다
broadcastIntent() | 브로드캐스팅을 수행할 때 사용(수신자와 송신자가 있어서 수신자의 정보를 보낼때)

인텐트의 구성요소는 액션(action)과 데이터(data)로 나눌 수 있습니다.

액션은 수행할 기능을 의미하는 속성으로, 

```shell
startActivity(intent.ACTION_VIEW, Uri.parser("https://m.naver.com));
```

처럼 위의 함수들에 액션을 변수로 넣어 사용하거나 
```shell
Intent intent = new Intent(Intent.ACION_VIEW);
``` 
처럼 intent의 인스턴스객체를 만들 때 constructor로 넣어 사용합니다.

데이터는 인텐트의 액션을 실행할때 요구되는 데이터를 의미합니다. 인텐트에 포함되어 있는 데이터는 그 유형에 따라 인텐트가 실행될 때 자동으로 해당 액티비티를 띄워주는 데에 사용됩니다. 

예를 들어 데이터가 홈페이지 주소면 자동으로 인터넷 창을 띄워주는데에 사용되고 전화번호면 자동으로 전화걸기 화면을 띄워주는데 사용됩니다.

데이터의 유형은 xml에서 처럼 등록된 [MIME타입](https://ko.wikipedia.org/wiki/MIME#Content-Type)으로 구분됩니다. 

아래는 인텐트를 사용하는 간략한 함수 예시입니다. 

```shell
<Button
	android:layout_width = "wrap_content"
	android:layout_height= "wrap_content"
	android:text = "빨리 전화해"
	android:onClick = "CallMeRightNow" />
```
xml에서 버튼을 위와 같이 정의하고


```shell

public void CallMeRightNow(View v){
	Intent intent = new Intent(Intent.ATION_DIAL);
	intent.setData(Uri.parse("tel:01087654321"));
	startActivity(intent);
}
```

자바파일에서 위와 같이 onClick 함수를 만들어 주는 예시입니다.

