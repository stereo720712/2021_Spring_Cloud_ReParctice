try{
s_h("wkrYee");
var s_rv=function(a){s_L.call(this,a.Ka);var b=this;this.oa=a.service.window.get();this.Ba=this.Hu();this.Ca=window.orientation;this.wa=function(){var c=b.Hu(),d="orientation"in window&&90===Math.abs(window.orientation)&&b.Ca===-1*window.orientation;b.Ca=window.orientation;if(c!==b.Ba||d){b.Ba=c;d=s_e(b.Aa);for(var e=d.next();!e.done;e=d.next()){e=e.value;var f=new s_fMb(c);try{e(f)}catch(g){s_5a(g)}}}};this.Aa=new Set;this.oa.addEventListener("resize",this.wa);"orientation"in window&&this.oa.addEventListener("orientationchange",
this.wa)};s_p(s_rv,s_L);s_rv.ob=s_L.ob;s_rv.Ga=function(){return{service:{window:s_Nj}}};s_rv.prototype.addListener=function(a){this.Aa.add(a)};s_rv.prototype.removeListener=function(a){this.Aa.delete(a)};s_rv.prototype.Hu=function(){if(s_BUb()){var a=s_6f(this.oa);a=new s_Wf(a.width,Math.round(a.width*this.oa.innerHeight/this.oa.innerWidth))}else a=s_CUb||(s_Ge()?s_BUb():this.oa.VisualViewport)?s_6f(this.oa):new s_Wf(this.oa.innerWidth,this.oa.innerHeight);return a.height<a.width};
s_rv.prototype.destroy=function(){this.oa.removeEventListener("resize",this.wa);this.oa.removeEventListener("orientationchange",this.wa)};var s_BUb=function(){return s_Ge()&&s__d()&&!navigator.userAgent.includes("GSA")},s_CUb=!1;s_kj(s_$ta,s_rv);

s_CUb=!0;

s_i();

}catch(e){_DumpException(e)}
// Google Inc.
