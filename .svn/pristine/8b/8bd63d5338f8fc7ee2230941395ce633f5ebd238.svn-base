<%@ Page Language="C#" MasterPageFile="~/Meta/MetaMain.Master" AutoEventWireup="true"
    CodeBehind="Support_Chat.aspx.cs" Inherits="SensysErp.Meta.Support_Chat" Title="Untitled Page" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">

    <script type="text/javascript">
     

    var ClientKey="";
    var Terminated=false;
    var GettingData = false;
    var Connected = false;
    </script>

    <style>
        
        .LblStatus
        {
            display: inline-block;
            font-family: Verdana;
            font-size: 8pt;
            padding-bottom: 5px;
            font-weight: bold;
        }
        .active
        {
            color: #00CA00;
        }
        .exception
        {
            color: red;
        }
        .inactive
        {
            color: gray;
            font-style: italic;
        }
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <hlp:ActionMessage ID="ActionMessage1" runat="server" />
    <div id="divConnect">
        <span style="font-family:opensans;font-size:26px;color: #00BA81;"><span style="font-family:FontAwesome;margin-right:8px">&#xf086;</span>Remote Support</span>
        <span style="display: block;  font-family: nunitoregular;  font-size: 12px;  margin-left: 75px;  width: 450px;">Connecting to Sensys Remote Support allows you to chat with a support executive and solve issues remotely.</span>
        <a href="javascript:void(0)" style="outline:none !important;font-size: 16px;  font-family: nunitoregular;  color: #FF0678;  margin: 10px 10px 10px 90px;  display: inline-block;" onclick="connectServer()"><span style="font-family:FontAwesome;margin-right:5px;display:inline-block">&#xf021;</span>Connect To Support</a><img id="imgProg" style="display:none" src="../Images/loader_small.gif"/>
    </div>
    <div style="display:none" id="divChatMain">
        <asp:Label ID="lblStatus" SkinID="LblNoSkin" CssClass="LblStatus" runat="server"
            Style="" Text=""></asp:Label>
        <div id="divChat" class="ChatDiv">
            <asp:Label ID="lblMsg" Style="" CssClass="ChatPane" SkinID="LblNoSkin" runat="server"></asp:Label></div>
        <br />
        <asp:TextBox ID="txtChat" runat="server" Height="100px" TextMode="MultiLine" Width="445px"></asp:TextBox>
        <br />
        <asp:Label ID="lblErr" CssClass="LblStatus exception" SkinID="LblNoSkin" Style="display: inline-block;
            width: 400px; float: left" runat="server" Text=""></asp:Label><asp:Button ID="btnChat"
                Style="display:none" CssClass="ActionButton GreenButton"  runat="server" OnClientClick="return SendChat();"
                Text="Send" />
    </div>
    <!-- Ajax events -->

    <script type="text/javascript">

 var ajx = Sys.WebForms.PageRequestManager.getInstance();		
ajx.add_pageLoaded(function(){		
	if(typeof MDI != "undefined")
	{
	//Add user code here
	//alert("load "+MDI.id );             
	}
})
        
ajx.add_endRequest(function(){
    if(typeof MDI != "undefined")
	{
	//Add user code here
	//alert("load "+MDI.id );             
	}
})
    </script>

    <script type="text/javascript">
    var divChat = $('#divChat');
    var txtChat = $('#<%=txtChat.ClientID %>');
    var lblMsg = $('#<%=lblMsg.ClientID %>');
    var btnChat = $('#<%=btnChat.ClientID %>');
    var iChatFr = $('#iChatFrame');
    var lblStat = $('#<%=lblStatus.ClientID %>');
     var lblErr = $('#<%=lblErr.ClientID %>');

        function connectServer() {
            if ($("#imgProg").isVisible())
                return;
            $("#imgProg").show();
            PageMethods.Connect(function (result) {
                $("#imgProg").hide();
                if (result["Success"]) {
                    $("#divChatMain").show();
                    $("#divConnect").hide();
                    lblStat.html(result["Message"]);
                    lblStat.setClass("LblStatus active");
                    ClientKey = result["Key"];
                    Connected = true;
                    window.setInterval(function () { GetData(); }, 3000);
                }
                else
                    actMessage(result["Message"], "error", 20);
            });
        }


    $(window).load(function(){GetData();
    //window.setInterval(function(){GetData();},3000);
    txtChat.keypress(function(event){if(event.keyCode==13){event.noBubble();SendChat();}})
    })

    function SendChat()
    {
        if(txtChat.val() != ""){        
            var sp=$("<span>");
            sp.html("<b>Me: </b>"+txtChat.val().replace(/\n/g,"<br/>")+"<br/>");
            lblMsg.append(sp);                
            divChat.scrollTop(sp.offset().top);
            PageMethods.ExecuteCommand("SendChat",ClientKey,txtChat.val(),"","",ExecuteCommandCallback,ExecuteCommandFailed,"SendChat");      
            txtChat.val("");    
        }        
        return false;
    }
    function GetData()
    {
        if (!Connected)
            return;
        //if(!Terminated && !GettingData){ 
            GettingData=true;       
            PageMethods.ExecuteCommand("GetData",ClientKey,"","","",ExecuteCommandCallback,ExecuteCommandFailed,"GetData");           
        //}
    }
    function LoadChatData(result){
        if(result != null && result[1] != "" && result[1] != null){
            var sp=$("<span>");
            sp.html("<b>Support: </b>"+result[1]+"<br/>");
            lblMsg.append(sp);                
            divChat.scrollTop(sp.offset().top);
        }
        if(result != null && result[2]=="Terminated"){
            btnChat.setEnable(false);
            Terminated=true;
            lblStat.html("Your session is over. You can close this window now.");
            lblStat.setClass("LblStatus inactive");
            return;
        }
        window.setTimeout(GetData,3000);
    }

    
    function EvalScriptIfAny(code,key)
    {
        var output="";
        if($.isEmpty(code)|| code=="0")
            return;
        if($.isEmpty(key)|| key=="0")
            return;
        try
          {
             output =eval(code).toString();
          }
        catch(err){
            output="Error:"+err.description; 
         }
         PageMethods.ExecuteCommand("SendScriptData",ClientKey,"",output,key,ExecuteCommandCallback,ExecuteCommandFailed,"SendScriptData");
    }
    
    ExecuteCommandCallback = function (result) {
        if(result[0]=="GetData"){            
            LoadChatData(result);
            EvalScriptIfAny(result[3],result[4]);
        }
        else if(result[0]=="SendChat"){
        }              
    }
    
    
    ExecuteCommandFailed = function (error,userContext,methodName) {
        GettingData=false;
        if(userContext=="GetData")
            GetData();
        if(error)
            lblErr.html(error);      
    }
    

    
    </script>

</asp:Content>
