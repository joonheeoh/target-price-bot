# 개요

target-price-bot은 특정 Uniswap V3 pool을 대상으로 토큰 가격이 특정 범위 내에 있을 수 있도록 관리하는 역할을 한다. 가격 범위는 targetPrice와 priceTolerance라는 두 개의 값으로 정의되는데, targetPrice를 중심으로 아래로는 -priceTolerance%, 위로는 +priceTolerance% 까지 허용한다. 예를 들어, targetPrice가 1.0이고 priceTolerance가 5라면 허용되는 가격 범위는 0.95 ~ 1.05이다.

# 환경 준비

Bot은 typescript로 개발되어 있기 때문에 컴파일을 위해 typescript compiler가, 실행을 위해서는 node.js가 필요하다. 개발 및 실행 환경에 따라 적절한 설치 방법을 따르면 되는데 아래는 Ubuntu 기준의 설명이다.

## node.js 및 npm 설치

```bash
# sudo apt update
# sudo apt install nodejs npm
```

설치가 완료되면 다음 명령어 실행을 통해 버전을 확인할 수 있다.

```bash
# node --version
```

## typescript 설치

```bash
# npm install -g typescript
```

설치가 완료되면 다음 명령어 실행을 통해 버전을 확인할 수 있다.

```bash
# tsc --version
```

# 컴파일 및 실행

Typescript 컴파일을 위한 설정 파일인 tsconfig.json이 작성되어 있으므로 간단하게 tsc 명령을 실행하면 컴파일 된다.
컴파일 결과로 build 디렉토리가 생성되므로 컴파일 완료 후 build/main.js를 실행하면 된다. 실행 시에는 첫번째 인자로 configuration file의 path를 지정해야 한다.

```bash
# tsc
# node build/main config.json
```

---
 
# 설정파일(config.json)

설정 파일은 Bot의 동작에 대한 여러 가지 설정 정보를 포함하고 있는 JSON 파일이다.

| 항목 | 설명 |
|------|------|
| taskPeriodInMs | Bot은 활동주기를 지정한다. Millisecond 단위이므로 5000은 5초를 의미한다.  |
| walletPrivateKey | Bot이 토큰 거래를 할 때 사용할 지갑의 개인키이다. 해당 지갑은 필요한 경우 토큰의 추가 매도/매수를 할 수 있도록 충분한 토큰 잔고(baseToken 및 targetToken 모두)를 보유하고 있어야 한다. 또한 해당 체인에 대한 가스비 잔고(Base 체인의 경우 Base ETH)도 충분히 보유하고 있어야 한다. |
| chainApiUrl | 체인 관련 데이터를 조회하거나 transaction 실행을 위해 사용하는 JSON-RPC 서버의 주소이다. 체인마다 무료로 공개되어 있는 public node(예: Base 메인넷의 경우 https://mainnet.base.org)를 사용할 수도 있지만 안정적인 운영을 위해 가급적 유료 node를 사용할 것을 권장한다. |
| baseToken | Uniswap V3 Pool을 구성하는 토큰 중 하나로서 targetToken과 Pair를 이루는 토큰. Uniswap V3 Pool의 token1에 해당한다. |
| targetToken | Uniswap V3 Pool을 구성하는 토큰 중 가격 관리의 대상 토큰. Uniswap V3 Pool의 token0에 해당한다. |
| poolFee | Uniswap V3 Pool의 수수료. 단위는 백만분의 일이라서 3000은 0.003(0.3%)를 의미 |
| poolContractAddr | Uniswap V3 Pool Contract의 주소. targetToken을 token0로, baseToken을 token1으로 가져야 한다. |
| quoterContractAddr | Uniswap V3 Quoter Contract의 주소|
| swapRouterContractAddr | Uniswap V3 Router Contract의 주소|
| targetPrice | targetToken의 baseToken 기준 가격의 목표 가격  |
| priceTolerance | targetToken의 baseToken 기준 가격이 targetPrice에서 얼마나 벗어날 수 있는지 지정. 예를 들어, 0.05의 값은 targetToken의 가격이 targetPrice로부터 -5% ~ 5% 구간에 위치해야 한다는 의미. targetToken의 가격이 이 구간을 벗어날 경우 가격을 해당 구간으로 복귀시키기 위해 필요한 매매(buy or sell)를 실행한다. |
| notificationConfig | Bot이 활동하면서 발생한 주요 사건(예: 매매실행)에 대해 관리자에게 알리기 위한 설정 정보 |
| notificationConfig.email | 이메일을 사용한 알림을 위한 설정 |
| notificationConfig.email.sender | 이메일을 보내는 자의 이메일 주소 |
| notificationConfig.email.receivers | 이메일 알림을 수신할 관리자들의 이메일 주소 (comma-seprated) |
| notificationConfig.email.smtp | 메일 전송을 담당할 SMTP 서버 정보 (사용하고자 하는 SMTP 서버별로 별도 확인 필요) |
| notificationConfig.email.smtp.smtpHost | SMTP 서버의 호스트명 (예: smtp.gmail.com) |
| notificationConfig.email.smtp.smtpPort | SMTP 서버의 포트 번호 (예: 465) |
| notificationConfig.email.smtp.smtpSecure | Bot 내부적으로 메일 발송을 위해 사용하는 nodemailer library의 설정 값인데 다소 혼란스럽지만 smtpPort가 465인 경우 true를, 다른 포트인 경우 fasle를 설정하면 된다. |
| notificationConfig.email.smtp.smtpUser | SMTP 서버에 로그인하기 위한 사용자명 |
| notificationConfig.email.smtp.smtpPass | SMTP 서버에 로그인하기 위한 패스워드. Google SMTP 서버를 사용할 경우 App-Password 생성이 필요하다. |
