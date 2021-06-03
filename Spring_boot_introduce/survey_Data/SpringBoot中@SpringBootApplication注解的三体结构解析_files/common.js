// jQuery cookie 插件
(function($,document,undefined){var pluses=/\+/g;function raw(s){return s}function decoded(s){return unRfc2068(decodeURIComponent(s.replace(pluses," ")))}function unRfc2068(value){if(value.indexOf('"')===0){value=value.slice(1,-1).replace('\\"','"').replace("\\\\","\\")}return value}var config=$.cookie=function(key,value,options){if(value!==undefined){options=$.extend({},config.defaults,options);if(value===null){options.expires=-1}if(typeof options.expires==="number"){var days=options.expires,t=options.expires=new Date();t.setDate(t.getDate()+days)}value=config.json?JSON.stringify(value):String(value);return(document.cookie=[encodeURIComponent(key),"=",config.raw?value:encodeURIComponent(value),options.expires?"; expires="+options.expires.toUTCString():"",options.path?"; path="+options.path:"",options.domain?"; domain="+options.domain:"",options.secure?"; secure":""].join(""))}var decode=config.raw?raw:decoded;var cookies=document.cookie.split("; ");var result=key?null:{};for(var i=0,l=cookies.length;i<l;i++){var parts=cookies[i].split("=");var name=decode(parts.shift());var cookie=decode(parts.join("="));if(config.json){cookie=JSON.parse(cookie)}if(key&&key===name){result=cookie;break}if(!key){result[name]=cookie}}return result};config.defaults={};$.removeCookie=function(key,options){if($.cookie(key)!==null){$.cookie(key,null,options);return true}return false}})(jQuery,document);

window.config = {
	'siteid': 2,
	'serverDomain': 'http://vip.biancheng.net'
};

$(document).ready(function(){
	//加载当前位置下方广告
	(function(){
		//$("#ad-position-bottom").html('<a href="https://www.luffycity.com/activity/python-8days-camp?source=c" target="_blank"><img width="100%" src="/uploads/ads/ad_position_bottom_lufei.jpg?v=' + window.cmsTempletsVer + '" /></a>');
	})();
	//加载文章上方广告
	(function(){
		var adArcTop =  $("#ad-arc-top").children();
		//图片广告
		//adArcTop.first().html('<a href="https://www.luffycity.com/activity/python-8days-camp?source=c" target="_blank"><img width="100%" src="/uploads/ads/ad_arc_top_lufei.jpg?v=' + window.cmsTempletsVer + '" /></a>');

		//文字广告
		var adText = adArcTop.last();
		var adid = adText.attr("adid");
		if(adid == "linuxprobe"){
			adText.html('<a href="http://fudao.biancheng.net"  rel="nofollow" target="_blank" style="color:#D33428;">C语言中文网推出辅导班啦，包括<span style="color: #008000;">「C语言辅导班、C++辅导班、算法/数据结构辅导班」</span>，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践 + 永久学习。QQ在线，随时响应！</a>');
		}else if(adid == "python-1v1q2a"){
			adText.html('<a href="http://c.biancheng.net/view/7548.html" target="_blank" style="color: #D33428;">Python一对一答疑，帮助有志青年！使用QQ在线辅导，哪里不懂问哪里，整个过程都是一对一，学习更有针对性。和作者直接交流，不但提升技能，还提升 Level；当你决定加入我们，你已然超越了 90% 的程序员。<span style="color:#08c;">猛击这里了解详情。</span></a>');
		}else if(adid == "java-1v1q2a"){
			adText.html('<a href="http://c.biancheng.net/view/7552.html" target="_blank" style="color: #D33428;">Java一对一答疑，帮助有志青年！使用QQ在线辅导，哪里不懂问哪里，整个过程都是一对一，学习更有针对性。和作者直接交流，不但提升技能，还提升 Level；当你决定加入我们，你已然超越了 90% 的程序员。<span style="color:#08c;">猛击这里了解详情。</span></a>');
		}else{
			adText.html('<a href="http://fudao.biancheng.net"  rel="nofollow" target="_blank" style="color:#D33428;">C语言中文网推出辅导班啦，包括<span style="color: #008000;">「C语言辅导班、C++辅导班、算法/数据结构辅导班」</span>，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践 + 永久学习。QQ在线，随时响应！</a>');
		}
	})();
	//加载文章底部广告
	(function(){
		var adArcBottom = $("#ad-arc-bottom");
		var adPicPC = /*'<p class="pic_pc">'+
						 '<a href="https://w.url.cn/s/AlLWPub?from=biancheng_net" target="_blank"><img width="100%" src="/uploads/ads/ad_arc_bottom_kaikeba.gif?v=' + window.cmsTempletsVer + '" alt="底部图片广告2_PC" /></a>'+
					  '</p>' +*/
					  '';
		var adPicWAP = /*'<p class="pic_wap">'+
						 '<a href="https://w.url.cn/s/AlLWPub?from=biancheng_net" target="_blank"><img width="100%" src="/uploads/ads/ad_arc_bottom_kaikeba_wap.gif?v=' + window.cmsTempletsVer + '" alt="底部图片广告2_WAP" /></a>'+
					   '</p>' +*/
					   '';
		if(adArcBottom && adArcBottom.length){
			adArcBottom.html( adPicPC + adPicWAP );
		}

		var adText = '';
		if(adArcBottom && adArcBottom.length){
			if( /a_\d+/i.test(window.arcIdRaw) ){
				adArcBottom.html( adPicPC + adPicWAP + adText );
			}else if( /t_\d+/i.test(window.arcIdRaw) ){
				adArcBottom.html( adPicPC + adPicWAP );
			}
		}
	})();

	// 在目录中找到当前文章
	(function(){
		var url = document.location.pathname;
		var contents = $("#contents");
		var as = contents.length ? contents.find('a') : null;

		as && as.each(function(index, domEle){
			var thisURL = $(domEle).attr('href');
			if(thisURL === url){
				$(this).parent().addClass('active');
				return false;
			}
		});
	})();

	//手机版--教程目录切换按钮
	(function(){
		var toggleBtn = $("#sidebar-toggle");
		var sidebar = $("#sidebar");
		toggleBtn.click(function(){
			toggleBtn.toggleClass("toggle-btn-active");
			sidebar.toggleClass("toggle-target-active");
		});
	})();

	//返回顶部
	(function(){
		$("#return-top").click(function(){
			$(window).scrollTop(0);
		});
	})();

	// 加载代码高亮插件
	function codeHighlight(){
		var pres = document.getElementsByTagName("pre");
		if(!pres || !pres.length) return;

		jQuery.ajaxSetup({
			cache: true
		});
		$.getScript(window.cmsTemplets+"/script/jquery.snippet.js",function(){
			$(pres).each(function(){
				settings = {style: "bright"};

				var thisClass = $(this).attr("class");
				thisClass = thisClass && thisClass.replace( /^shell$/, "sh" );  // Shell

				var showNum = $(this).attr("shownum");
				if(showNum && showNum=="false"){
					settings.showNum = false;
					settings.menu = false;
				}

				var showMenu = $(this).attr("showmenu");
				if(showMenu){
					if(showMenu=="false"){
						settings.menu = false;
					}else{
						settings.menu = true;
					}
				}

				if(showMenu && showMenu=="false"){
					settings.menu = false;
				}

				thisClass && !/info-box/.test(thisClass) && $(this).snippet(thisClass, settings);
			});
		});
		jQuery.ajaxSetup({
			cache: false
		});
	}
	codeHighlight();

	//加载付费文章，或者提示购买积分
	(function(){
		var buyCourseTip = $("#buy-course-tip");  //提示购买课程/开通VIP会员
		if(buyCourseTip && buyCourseTip.length){
			var vipCookie = parseInt( $.cookie("pvip") );
			var pointsCookie = parseInt( $.cookie("ppoints") );

			if(vipCookie>=7){  //开通了会员
				$.ajax({
					method: 'get',
					url: window.config.serverDomain + "/p/vip/api/ajax/get_article.php",
					dataType: 'jsonp',
					data: {
						'siteid': window.config.siteid,
						'aid':    buyCourseTip.attr("aid"),
						'v':      window.cmsTempletsVer
					},
					timeout: 10000,
					beforeSend: function(XMLHttpRequest){
						buyCourseTip.html('<p>正在加载文章内容...</p>');
					},
					success: function(retData){
						var arcBody = decodeURIComponent(retData.body);
						if(retData.success){
							buyCourseTip.parent().html( decodeURIComponent(retData.body) );
							codeHighlight();
						}else{
							buyCourseTip.html('<p>' +decodeURIComponent(retData.msg) + '</p>');
						}
					},
					error: function(jqXHR, textStatus, errorThrown){
						buyCourseTip.html('<p>加载文章内容失败，请刷新重试！</p>');
					}
				});
			}else if(pointsCookie>0){  //拥有积分
				var points =  buyCourseTip.attr("points");
				$.ajax({
					method: 'get',
					url: window.config.serverDomain + "/p/points/api/ajax/get_article.php",
					dataType: 'jsonp',
					data: {
						'siteid': window.config.siteid,
						'aid':    buyCourseTip.attr("aid"),
						'points': points ? points : 1,
						'v':      window.cmsTempletsVer
					},
					timeout: 10000,
					beforeSend: function(XMLHttpRequest){
						buyCourseTip.html('<p>正在加载文章内容...</p>');
					},
					success: function(retData){
						var arcBody = decodeURIComponent(retData.body);
						if(retData.success){
							buyCourseTip.parent().html( decodeURIComponent(retData.body) );
							codeHighlight();
						}else{
							buyCourseTip.html('<p>' +decodeURIComponent(retData.msg) + '</p>');
						}
					},
					error: function(jqXHR, textStatus, errorThrown){
						buyCourseTip.html('<p>加载文章内容失败，请刷新重试！</p>');
					}
				});
			}else if( !$.cookie("userinfo") /*&& thisTimestamp>1615824001 && thisTimestamp<1615910401*/ ){
				buyCourseTip.html('<p>您好，您正在阅读高级教程/项目实践，请先 <a href="' + window.config.serverDomain + '/login.php" target="_blank">登录</a> 或者 <a href="' + window.config.serverDomain + '/register.php" target="_blank">注册</a>。</p>');
			}else{
				buyCourseTip.html('<p>您好，您正在阅读付费教程，您的积分不足，请<a href="' + window.config.serverDomain + '/p/points/show.php" target="_blank">猛击这里获取更多积分</a>。</p>');
			}
		}
	})();

	//更新文章点击次数
	(function(){
		$.ajax({
			method: 'get',
			url: "http://sso.biancheng.net/api/click.php",
			dataType: 'jsonp',
			data: {"siteid": window.siteId, "arcid": window.arcId, "v": window.cmsTempletsVer},
			timeout: 10000,
			success: function(data){
				if( !data.success ){
					//TODO:
				}
			},
			error: function(jqXHR, textStatus, errorThrown){
				//TODO:
			}
		});
	})();
});