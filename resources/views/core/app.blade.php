<!DOCTYPE html>
<html lang="es">

<head>
    @include('core.head')
</head>

<body
    class="home page-template-default page page-id-8432 theme-woodmart woocommerce-no-js wrapper-custom  categories-accordion-on woodmart-ajax-shop-on offcanvas-sidebar-mobile offcanvas-sidebar-tablet sticky-toolbar-on wd-sticky-nav-enabled elementor-default elementor-kit-7 elementor-page elementor-page-8432">

    <script type="application/ld+json">
        {
            "@context": "https://schema.org",
            "@type": "Corporation",
            "name": "Merchi",
            "url": "https://merchi.cl/",
            "logo": "https://merchi.cl/wp-content/uploads/2023/02/Logo-Merchi-Regalos-Corporativos-8.png",
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+56 9 9793 9403",
                "contactType": "customer service",
                "contactOption": "TollFree",
                "areaServed": "CL",
                "availableLanguage": "es"
            },
            "sameAs": [
                "https://www.facebook.com/merchi.chile",
                "https://www.instagram.com/merchi.cl/",
                "https://www.youtube.com/@merchi_cl"
            ]
        }
    </script>

    @yield('content')

    @yield('footer')

</body>

</html>