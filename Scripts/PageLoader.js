var PageLoader = new Object();

var PL_Image = new Image();
PageLoader.SetImageUrl =function (image)
{  
   PL_Image.src = image;
   PageLoader.ImageUrl="../images/progbar.gif";
}

PageLoader.Background=null; 
PageLoader.Frame=null;
PageLoader.Image=null;
PageLoader.ImagePos="C";//TL,TR,BL,BR,C
PageLoader.SetImageUrl("../images/progbar.gif");
PageLoader.Deactivate=false;
PageLoader.Container=null;
PageLoader.CtrElem=null;

       $(document).ready(PageLoader_Init);
       function PageLoader_Init()
       {     
     
            if(PageLoader.Deactivate)
                return;
            var ctr="body";
            if(PageLoader.Container !=null){
                ctr=$("#"+PageLoader.Container);
                PageLoader.CtrElem=document.getElementById(PageLoader.Container);
            }
            PageLoader.Background=$('<DIV id="PageLoader_Ctr"  style="display:none;position:absolute;z-index:1050;height:1px;width:1px;background-color:#fff;top:0px;left:0px"></DIV>').appendTo(ctr);
            PageLoader.Frame = $('<iframe id="PageLoader_Frm" style="display:none;position:absolute;z-index:1045;height:1px;width:1px;" frameBorder="0"></iframe>').appendTo(ctr);
            PageLoader.Image = $('<img id="PageLoader_Img"    style="display:none;position:absolute;top:0px;left:0px" />').appendTo(ctr);            
            PageLoader.Background.css('opacity',0.3)
            PageLoader.Frame.css('opacity',0)
            PageLoader.Image.attr("src",PL_Image.src);
           
            if (typeof Sys != "undefined") {
                var ajxLdr = Sys.WebForms.PageRequestManager.getInstance();
                ajxLdr.add_endRequest(
		            function() {
		               PageLoader_Stop();
		            }
                )
                ajxLdr.add_beginRequest(
                    function() {                       
                       PageLoader_Start();
                    }
                )                                                
                Sys.Application.add_load(
                    function() {
		              PageLoader_Stop();
		            }
                )
            }
           if(document.forms)
            $(document.forms[0]).submit(PageLoader_Start);            
       }
       
       function PageLoader_Stop()
       {
            PageLoader.Background.hide();
            PageLoader.Frame.hide();
            PageLoader.Image.hide();            
       }
       

       
       function PageLoader_Start()
       {
            if(PageLoader.Deactivate)
                return;
            window.setTimeout(function(){PageLoader.Image.src=PL_Image.src;},100);
            if(PageLoader.Background.is(":visible"))
                return;
            var refElem=$(document.documentElement);
           
            if(PageLoader.CtrElem !=null){
                refElem=$(PageLoader.CtrElem);               
            }
            PageLoader.Frame.css('z-Index','9999');
            PageLoader.Background.css('z-Index','100001');
            PageLoader.Image.css('z-Index','100002');
            PageLoader.Background.overlay("Dim,Pos",refElem);
            PageLoader.Frame.overlay("Dim,Pos",refElem);
            PageLoader.Image.overlay("orig:"+PageLoader.ImagePos,refElem);
            
            PageLoader.Background.show();
            PageLoader.Frame.show();
            PageLoader.Image.show();  
       }