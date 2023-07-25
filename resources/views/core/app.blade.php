<!DOCTYPE html>
<html lang="es">

<head>
    @include('core.head')
</head>

<body
    class="home page-template-default page page-id-8432 theme-woodmart woocommerce-no-js wrapper-custom  categories-accordion-on woodmart-ajax-shop-on offcanvas-sidebar-mobile offcanvas-sidebar-tablet sticky-toolbar-on wd-sticky-nav-enabled elementor-default elementor-kit-7 elementor-page elementor-page-8432">

    @yield('content')

    @yield('footer')
    <script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"></script>
    <script src="{{asset('assets/js/swipper.js')}}"></script>
</body>

</html>