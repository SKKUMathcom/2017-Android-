# Android
## Andorid: Linux 기반의 스마트폰 단말기를 위한 플랫폼


## 특징:
1. 모든 리소스가 다 오픈되어 있다.(in C)
-> 각각의 리소스를 활용하기 쉬움.


2. 어플시장의 진입이 쉽다.
-> IOS의 App market은 어플리케이션을 심사하고, 필터링하는데에 반해 안드로이드는 별도의 필터링이 없음.


3. iphone에 비해 그래픽 성능이 살짝 떨어진다.
-> LINUX는 CLI(commend lince interface) 기반이기 때문에 Mac이나 Window와 같은 GUI(Graphic user interface) 기반의 OS에 비해 그래픽 구현 성능이 떨어지기 때문.
하지만 롤리팝 이후에는 그래픽 성능의 차이가 거의 없다. 

## Application

Language: JAVA (OS와의 호환을 위해 약간의 C를 사용하기도 함)

IDE: Android Studio

![Android](https://github.com/lkiung/SKKUMathcom-AndroidApp/blob/master/Seminar/Figure/android_icon.png)

# Android Studio

Android Studio의 특징은 나중에 정리

Android Studio는 개발환경툴(IDE)로 언어를 제공하지는 않는다.
따라서 앱개발에 필요한 자바를 먼저 설치합시다.

## JDK(Java Development Kit)

![javalogo](https://github.com/lkiung/SKKUMathcom-AndroidApp/blob/master/Seminar/Figure/java-logo-vector.png)

Java는 객체지향 언어로 Java Virtual Machine에 의해 OS에 따로 제한을 받지 않기 때문에 여러 환경에서 개발할 수 있다는 특징이 있다.

자바 설치하는거 디게디게 귀찮은데 하......

먼저 Java 설치하는 사이트로 갑시다. [Click here!!](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)

![JDK 설치](https://github.com/lkiung/SKKUMathcom-AndroidApp/blob/master/Seminar/Figure/java%20%EC%84%A4%EC%B9%98%202.PNG)

빨간색으로 동그라미 칠해진 Accept license Agreement를 클릭하고

자신의 운영체제에 맞게 설치해주시면 됩니다.

요즘 나온 노트북은 대부분 64bit 기반이며, 확인하는 방법은 내컴퓨터-> 제어판-> 시스템 속성 들어가면 있습니다.

최신버전 다운로드해서 next next 하면 다운로드 됩니다.

이제 경로설정을 해줍시다. 

![시스템속성](https://github.com/lkiung/SKKUMathcom-AndroidApp/blob/master/Seminar/Figure/%EC%8B%9C%EC%8A%A4%ED%85%9C%EC%86%8D%EC%84%B1.PNG)

시스템속성 -> 고급 시스템 설정

![환경변수](https://github.com/lkiung/SKKUMathcom-AndroidApp/blob/master/Seminar/Figure/%ED%99%98%EA%B2%BD%EB%B3%80%EC%88%98%EC%84%A4%EC%A0%95.PNG)

사진대로 환경변수-> 시스템변수 중에 새로만들기 클릭하고
변수이름: JAVA_HOME (크게 상관은 없지만 걍 하세요)
변수값 : 자바 설치한 경로

로 해줍시다. 
![환경변수2](https://github.com/lkiung/SKKUMathcom-AndroidApp/blob/master/Seminar/Figure/java%20%EC%84%A4%EC%B9%98%203.PNG)
그 후 시스템변수의 Path에 설치한 JAVA폴더의 bin폴더를 추가해줍니다.

## Android Studio

[Download](http://developer.android.com/intl/ko/sdk/index.html)

JDK설치가 끝났으면 Android Studio를 설치합시다.

설치과정은 그냥 next next!!
용량은 4G가 조금 넘는걸로 확인되는 무지 무거운 프로그램이고 설치가 상당히 오래걸립니다.

Android Studio 에서 설치하는건 크게 2가지 입니다.


### Virtualization

우리가 만들 App은 window환경에서 실행되는게 아닌 Android 환경에서 실행되기 때문에 가상화 머신을 이용해서 실행을 테스트합니다. 보통 CPU에 따라 결정되며 i3,i5,i7은 다 된대요.
확인하는 방법은 BIOS 접속하면 virtualization: Supported, Disabled 등으로 되어있다는데, 지금은 문서작성중이므로 확인하는 방법은 알아서 하시길.... disabled를 enabled로 바꿔줘야 합니다.


## SDK


설치가 완료되면 Android Studio를 실행해줍니다. 실행후 첫 화면에 보면 configure가 있는데 여기서 제일 먼저 나오는 SDK manager를 클릭합니다.
![configure](https://github.com/lkiung/SKKUMathcom-AndroidApp/blob/master/Seminar/Figure/sdk.png)

거기서 launch standalone SDK를 누르면 Android SDK Manager가 팝업됩니다. 여기서는 현재 설치된 플랫폼, 설치가 되지 않은 플랫폼에서 사용되는 tool을 확인, 수정할 수 있습니다.
Packages 목록중에 최신 안드로이드 API와 맨 아래 있는 Extras를 체크한 후 install 해줍시다.
![SDKManager](https://github.com/lkiung/SKKUMathcom-AndroidApp/blob/master/Seminar/Figure/launch%20standalone.PNG)

install시 라이센스가 다 accept 되도록 설치해주는것에 주의!!
![install](https://github.com/lkiung/SKKUMathcom-AndroidApp/blob/master/Seminar/Figure/sdk2.PNG)
