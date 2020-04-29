<header class="c-layout-header c-layout-header-onepage c-layout-header-default c-layout-header-dark-mobile c-header-transparent-dark" id="home" data-minimize-offset="0">
  <div class="c-navbar">
    <div class="container-fluid"> 
      <div class="c-navbar-wrapper clearfix">
        <div class="c-brand c-pull-left"> 
          <a href="#" class="c-logo"> 
            <img src="assets/images/company_logo 2.png" alt="Logo" class="c-desktop-logo"> 
            <img src="assets/images/company_logo 2.png" alt="Logo" class="c-desktop-logo-inverse"> 
            <img src="assets/images/company_logo 2.png" alt="Logo" class="c-mobile-logo"> 
          </a>
          <button class="c-hor-nav-toggler" type="button" data-target=".c-mega-menu"> 
            <span class="c-line"></span> 
            <span class="c-line"></span> 
            <span class="c-line"></span> 
          </button>
        </div>
        <style type="text/css">
          .c-link > span, .links-dropdown > span {
            position: relative;
            color: #000;
            text-decoration: none;
          }

          .c-link > span:hover, .links-dropdown > span:hover {
            color: #0a0 !important;
          }
          .c-link > span:before, .links-dropdown > span:before {
            content: "";
            position: absolute;
            width: 100%;
            height: 2px;
            bottom: -6px;
            left: 0;
            background-color: #0a0;
            visibility: hidden;
            transform: scaleX(0);
            transition: all 0.3s ease-in-out 0s;
          }
          .c-link > span:hover:before, .links-dropdown > span:hover:before {
            visibility: visible;
            transform: scaleX(1);
          }
        </style>
        <nav class="c-mega-menu c-mega-menu-onepage c-pull-right c-mega-menu-dark c-mega-menu-dark-mobile c-fonts-uppercase c-fonts-bold" data-onepage-animation-speed="300">
          <ul class="nav navbar-nav c-theme-nav">

            <li class="c-onepage-link active c-active"> <a href="http://spacegm.com/injuryv3/" class="c-link"><span>Home</span></a> </li>

            <li class="c-onepage-link show show-mobile"><a href="#" class="c-link"><span>Solutions</span></a> 

              <ul class="child-dropdown">
                <li class="child-li"><a href="http://spacegm.com/injuryv3/orthopedics/" class="links-dropdown" hreflang="en"><span class="tele">Orthopedics</span></a></li>
                <li class="child-li"><a href="http://spacegm.com/injuryv3/spine/" class="links-dropdown" hreflang="en"><span class="tele">Spine</span></a></li>
                <li class="child-li"><a href="http://spacegm.com/injuryv3/injury-pain/" class="links-dropdown"><span class="tele">Injury and Pain</span></a></li>
              </ul>

              <ul class="mobile-dropdown">
                <li class="child-li"><a href="http://spacegm.com/injuryv3/orthopedics/" class="links-dropdown mobile-links" hreflang="en">Orthopedics</a></li>
                <li class="child-li"><a href="http://spacegm.com/injuryv3/spine/" class="links-dropdown mobile-links" hreflang="en">Spine</a></li>
                <li class="child-li"><a href="http://spacegm.com/injuryv3/injury-pain/" class="links-dropdown mobile-links">Injury and Pain</a></li>
              </ul>

            </li>

            <li class="c-onepage-link active c-active"> <a href="#" class="c-link"><span>Second Opinion</span></a> </li>
         

  <!-- <li class="c-onepage-link show show-mobile-two"> <a href="#" class="c-link">Services</a>
              <ul class="child-dropdown"> 
  <li class="child-li"><a href="javascript:void(0);" class="links-dropdown" hreflang="en"><span class="tele">Skilled Nursing Facility</span></a></li>
                <li class="child-li"><a href="javascript:void(0);" class="links-dropdown"><span class="tele">Emergency Response Management</span></a></li>
              </ul>

              <ul class="mobile-dropdown-two"> 
                <li class="child-li"><a href="javascript:void(0);" class="links-dropdown mobile-links" hreflang="en">Skilled Nursing Facility</a></li>
                <li class="child-li"><a href="javascript:void(0);" class="links-dropdown mobile-links">Emergency Response<br/>Management</a></li>
              </ul>
  </li> -->

           <li class="c-onepage-link show show-mobile-three"> <a href="#" class="c-link"><span>Employers</span></a>
             
             <!-- <ul class="child-dropdown"> 
                <li class="child-li"><a href="javascript:void(0);" class="links-dropdown" hreflang="en"><span class="tele">Workers compensation</span></a></li>
                <li class="child-li"><a href="javascript:void(0);" class="links-dropdown"><span class="tele">Self-funded</span></a></li>
              </ul>

              <ul class="mobile-dropdown-three"> 
                <li class="child-li"><a href="javascript:void(0);" class="links-dropdown mobile-links" hreflang="en">Workers compensation</a></li>
                <li class="child-li"><a href="javascript:void(0);" class="links-dropdown mobile-links">Self-funded</a></li>
              </ul> -->

           </li>


           <!-- <li class="c-onepage-link show"> <a href="#" class="c-link">Providers</a></li> -->
           <!-- <li class="c-onepage-link show"> <a href="#" class="c-link">Attorney</a></li> -->
           <li> <a href="tel:(972) 865-4454" ref="" class="c-btn-border-opacity-04 c-btn btn-no-focus c-btn-header btn btn-lg btn-new c-btn-border-1x c-btn-dark c-btn-circle c-btn-uppercase c-btn-sbold"><i class="fa fa-phone" aria-hidden="true"></i>(972) 865-4454</a> </li>
          </ul>
        </nav>
        
        <!-- END: MEGA MENU --> 

<script type="text/javascript">
  /*prabhat pandit jquery code */
  $(document).ready(function(){
    $(".show-mobile").click(function(){
    $(".mobile-dropdown").toggleClass("mobile-visible");
    $(".mobile-links").addClass("links-dropdown-mobile");
    });

    $(".show-mobile-two").click(function(){
    $(".mobile-dropdown-two").toggleClass("mobile-visible");
    $(".mobile-links").addClass("links-dropdown-mobile");
    });

    $(".show-mobile-three").click(function(){
    $(".mobile-dropdown-three").toggleClass("mobile-visible");
    $(".mobile-links").addClass("links-dropdown-mobile");
    });
  });
$(document).ready(function(){
  $(".c-onepage-link").hover(function(){
    $(this).find(".child-dropdown").addClass("shownow");
    }, function(){
     $(this).find(".child-dropdown").removeClass("shownow");
  });
});
</script>
        
</div>
</div>
</div>





</header>