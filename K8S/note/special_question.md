# some questions

## Q1. 若要將既有的 Java Spring Boot 程式放上這個PaaS平台
## 需要做哪些動作, 流程有哪些

###　ans:
   1.先補充一點 如果是 單純幾個springboot的應用, 先安裝azure cli工具
   這邊看文件都是利用 maven的 azure外掛 設定一些azure上需要的像
   是帳號等資訊之後編譯,然後佈署上傳
   (實際操作:
    1.1 use maven azure wep app plugin
    mvn com.microsoft.azure:azure-webapp-maven-plugin:1.14.0:config
    輸入 azure 資訊(有些可以在pom.xml設定)
    1.2 azure 登入 cli之後 用 maven 發佈
   )
      (快速入門 https://docs.microsoft.com/zh-tw/azure/app-service/quickstart-java?pivots=platform-linux&tabs=tomcat)
      
   2.實際上會用到的大概是azure的 spring cloud 服務, 先簡單看了簡介,
   他幫你將一些另外需要自定義的架設的使用紀錄,統計等等的功能也做了封裝,
   定義從 : 
     Azure Spring Cloud --> resource group --> service instance
     做分組
   實際上看快速入門的設定大概步驟如下:
     1.package your app with maven.(should have azure maven plugin)
     

     ---use az cli tools to work (can use maven cli, IDEA plugin too)
     2.use azure spring cloud service establish a spring cloud instance, then set instance name, resource group name.
     3.establish config server with git
     4.it's needed to configure resource group name、spring-cloud service name with cli first.
     5.create your app with az
     6.app deploy
(Should use maven plugin is easy)
      Package your jar first.
      (need  set azure plugin first in pom.xml)
      then use maven azure tools to deploy.

## Q2.這個平台PaaS平台管的，跟使用Java Spring Boot 使用K8S來管,
之間的差異有哪些?
首先,我對整個完整的Docker佈署經驗並不足,只有稍微一些簡單的打包上傳跑這樣的經驗.
K8S我沒使用過,之前有稍微了解過,昨天先稍微再複習了一下,他是一個對docker container
做管理發佈的系統.
那Azure 這個 PaaS呢?我自己稍微看了問題一的資料後,我的認知是:
他是一套將os資源,服務工具等等的整合打包,最實際的東西就是auzre cli, 跟相關的 plugin.
該平台幫你整合相關需要的資源及管理工具,舉個例子,用azure spring cloud 服務發布你的應用後,不用在自己架設一些基本的紀錄,追蹤等功能,他已經幫你搞定.

至於k8s只是一套Docker container 的 cluser managerment system.
另外Azure 也有提供K8S的服務
https://docs.microsoft.com/zh-tw/azure/aks/tutorial-kubernetes-deploy-cluster?tabs=azure-cli



# MY-Q:

先從 本地構建練習 k8s 還是直接練習 如何使用 azure 做 微服務?