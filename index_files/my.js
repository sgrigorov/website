class WebsiteHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
              <header data-test="header" id="header" class="black header theme-col--primary" data-section-theme="black" data-controller="Header" data-current-styles="{
                &quot;layout&quot;: &quot;navRight&quot;,
                &quot;action&quot;: {
                &quot;href&quot;: &quot;/session&quot;,
                &quot;buttonText&quot;: &quot;Book session&quot;,
                &quot;newWindow&quot;: false
                },
                &quot;showSocial&quot;: false,
                &quot;socialOptions&quot;: {
                &quot;socialBorderShape&quot;: &quot;none&quot;,
                &quot;socialBorderStyle&quot;: &quot;outline&quot;,
                &quot;socialBorderThickness&quot;: {
                &quot;unit&quot;: &quot;px&quot;,
                &quot;value&quot;: 1.0
                }
                },
                &quot;menuOverlayAnimation&quot;: &quot;fade&quot;,
                &quot;cartStyle&quot;: &quot;cart&quot;,
                &quot;cartText&quot;: &quot;Cart&quot;,
                &quot;showEmptyCartState&quot;: true,
                &quot;cartOptions&quot;: {
                &quot;iconType&quot;: &quot;stroke-1&quot;,
                &quot;cartBorderShape&quot;: &quot;none&quot;,
                &quot;cartBorderStyle&quot;: &quot;outline&quot;,
                &quot;cartBorderThickness&quot;: {
                &quot;unit&quot;: &quot;px&quot;,
                &quot;value&quot;: 1.0
                }
                },
                &quot;showButton&quot;: false,
                &quot;showCart&quot;: false,
                &quot;showAccountLogin&quot;: true,
                &quot;headerStyle&quot;: &quot;dynamic&quot;,
                &quot;languagePicker&quot;: {
                &quot;enabled&quot;: false,
                &quot;iconEnabled&quot;: false,
                &quot;iconType&quot;: &quot;globe&quot;,
                &quot;flagShape&quot;: &quot;shiny&quot;,
                &quot;languageFlags&quot;: [ ]
                },
                &quot;mobileOptions&quot;: {
                &quot;layout&quot;: &quot;logoLeftNavRight&quot;,
                &quot;menuIcon&quot;: &quot;doubleLineHamburger&quot;,
                &quot;menuIconOptions&quot;: {
                &quot;style&quot;: &quot;doubleLineHamburger&quot;,
                &quot;thickness&quot;: {
                &quot;unit&quot;: &quot;px&quot;,
                &quot;value&quot;: 1.0
                }
                }
                },
                &quot;dynamicOptions&quot;: {
                &quot;border&quot;: {
                &quot;enabled&quot;: true,
                &quot;position&quot;: &quot;bottom&quot;,
                &quot;thickness&quot;: {
                &quot;unit&quot;: &quot;px&quot;,
                &quot;value&quot;: 4.0
                },
                &quot;color&quot;: {
                &quot;type&quot;: &quot;SITE_PALETTE_COLOR&quot;,
                &quot;sitePaletteColor&quot;: {
                &quot;colorName&quot;: &quot;lightAccent&quot;,
                &quot;alphaModifier&quot;: 0.01
                }
                }
                }
                },
                &quot;solidOptions&quot;: {
                &quot;headerOpacity&quot;: {
                &quot;unit&quot;: &quot;%&quot;,
                &quot;value&quot;: 100.0
                },
                &quot;border&quot;: {
                &quot;enabled&quot;: true,
                &quot;position&quot;: &quot;bottom&quot;,
                &quot;thickness&quot;: {
                &quot;unit&quot;: &quot;px&quot;,
                &quot;value&quot;: 1.0
                },
                &quot;color&quot;: {
                &quot;type&quot;: &quot;SITE_PALETTE_COLOR&quot;,
                &quot;sitePaletteColor&quot;: {
                &quot;colorName&quot;: &quot;black&quot;,
                &quot;alphaModifier&quot;: 1.0
                }
                }
                },
                &quot;dropShadow&quot;: {
                &quot;enabled&quot;: false,
                &quot;blur&quot;: {
                &quot;unit&quot;: &quot;px&quot;,
                &quot;value&quot;: 12.0
                },
                &quot;spread&quot;: {
                &quot;unit&quot;: &quot;px&quot;,
                &quot;value&quot;: 0.0
                },
                &quot;distance&quot;: {
                &quot;unit&quot;: &quot;px&quot;,
                &quot;value&quot;: 12.0
                }
                },
                &quot;blurBackground&quot;: {
                &quot;enabled&quot;: false,
                &quot;blurRadius&quot;: {
                &quot;unit&quot;: &quot;px&quot;,
                &quot;value&quot;: 12.0
                }
                },
                &quot;backgroundColor&quot;: {
                &quot;type&quot;: &quot;SITE_PALETTE_COLOR&quot;,
                &quot;sitePaletteColor&quot;: {
                &quot;colorName&quot;: &quot;white&quot;,
                &quot;alphaModifier&quot;: 1.0
                }
                },
                &quot;navigationColor&quot;: {
                &quot;type&quot;: &quot;SITE_PALETTE_COLOR&quot;,
                &quot;sitePaletteColor&quot;: {
                &quot;colorName&quot;: &quot;black&quot;,
                &quot;alphaModifier&quot;: 1.0
                }
                }
                },
                &quot;gradientOptions&quot;: {
                &quot;gradientType&quot;: &quot;faded&quot;,
                &quot;headerOpacity&quot;: {
                &quot;unit&quot;: &quot;%&quot;,
                &quot;value&quot;: 100.0
                },
                &quot;border&quot;: {
                &quot;enabled&quot;: true,
                &quot;position&quot;: &quot;bottom&quot;,
                &quot;thickness&quot;: {
                &quot;unit&quot;: &quot;px&quot;,
                &quot;value&quot;: 1.0
                },
                &quot;color&quot;: {
                &quot;type&quot;: &quot;SITE_PALETTE_COLOR&quot;,
                &quot;sitePaletteColor&quot;: {
                &quot;colorName&quot;: &quot;white&quot;,
                &quot;alphaModifier&quot;: 0.01
                }
                }
                },
                &quot;dropShadow&quot;: {
                &quot;enabled&quot;: true,
                &quot;blur&quot;: {
                &quot;unit&quot;: &quot;px&quot;,
                &quot;value&quot;: 12.0
                },
                &quot;spread&quot;: {
                &quot;unit&quot;: &quot;px&quot;,
                &quot;value&quot;: 0.0
                },
                &quot;distance&quot;: {
                &quot;unit&quot;: &quot;px&quot;,
                &quot;value&quot;: 12.0
                }
                },
                &quot;blurBackground&quot;: {
                &quot;enabled&quot;: true,
                &quot;blurRadius&quot;: {
                &quot;unit&quot;: &quot;px&quot;,
                &quot;value&quot;: 12.0
                }
                },
                &quot;backgroundColor&quot;: {
                &quot;type&quot;: &quot;SITE_PALETTE_COLOR&quot;,
                &quot;sitePaletteColor&quot;: {
                &quot;colorName&quot;: &quot;white&quot;,
                &quot;alphaModifier&quot;: 1.0
                }
                },
                &quot;navigationColor&quot;: {
                &quot;type&quot;: &quot;SITE_PALETTE_COLOR&quot;,
                &quot;sitePaletteColor&quot;: {
                &quot;colorName&quot;: &quot;white&quot;,
                &quot;alphaModifier&quot;: 1.0
                }
                }
                },
                &quot;dropShadowOptions&quot;: {
                &quot;enabled&quot;: true,
                &quot;blur&quot;: {
                &quot;unit&quot;: &quot;px&quot;,
                &quot;value&quot;: 12.0
                },
                &quot;spread&quot;: {
                &quot;unit&quot;: &quot;px&quot;,
                &quot;value&quot;: 0.0
                },
                &quot;distance&quot;: {
                &quot;unit&quot;: &quot;px&quot;,
                &quot;value&quot;: 12.0
                },
                &quot;color&quot;: {
                &quot;type&quot;: &quot;SITE_PALETTE_COLOR&quot;,
                &quot;sitePaletteColor&quot;: {
                &quot;colorName&quot;: &quot;lightAccent&quot;,
                &quot;alphaModifier&quot;: 1.0
                }
                }
                },
                &quot;borderOptions&quot;: {
                &quot;enabled&quot;: true,
                &quot;position&quot;: &quot;bottom&quot;,
                &quot;thickness&quot;: {
                &quot;unit&quot;: &quot;px&quot;,
                &quot;value&quot;: 4.0
                },
                &quot;color&quot;: {
                &quot;type&quot;: &quot;SITE_PALETTE_COLOR&quot;,
                &quot;sitePaletteColor&quot;: {
                &quot;colorName&quot;: &quot;lightAccent&quot;,
                &quot;alphaModifier&quot;: 0.01
                }
                }
                },
                &quot;showPromotedElement&quot;: false,
                &quot;buttonVariant&quot;: &quot;primary&quot;,
                &quot;blurBackground&quot;: {
                &quot;enabled&quot;: false,
                &quot;blurRadius&quot;: {
                &quot;unit&quot;: &quot;px&quot;,
                &quot;value&quot;: 12.0
                }
                },
                &quot;headerOpacity&quot;: {
                &quot;unit&quot;: &quot;%&quot;,
                &quot;value&quot;: 100.0
                }
                }" data-section-id="header" data-header-style="dynamic" data-language-picker="{
                &quot;enabled&quot;: false,
                &quot;iconEnabled&quot;: false,
                &quot;iconType&quot;: &quot;globe&quot;,
                &quot;flagShape&quot;: &quot;shiny&quot;,
                &quot;languageFlags&quot;: [ ]
                }" data-first-focusable-element="" tabindex="-1" style="
                --headerDropShadowColor: hsla(var(--lightAccent-hsl), 1);
                --headerBorderColor: hsla(var(--lightAccent-hsl), 0.01);
                --solidHeaderBackgroundColor: hsla(var(--white-hsl), 1);
                --solidHeaderNavigationColor: hsla(var(--black-hsl), 1);
                --gradientHeaderBackgroundColor: hsla(var(--white-hsl), 1);
                --gradientHeaderNavigationColor: hsla(var(--white-hsl), 1);
                " data-controllers-bound="Header">
            <div class="sqs-announcement-bar-dropzone"></div>
            <div class="header-announcement-bar-wrapper">
            <a href="https://www.naghedi-immigration.ca/#page" class="header-skip-link sqs-button-element--primary">
                Skip to Content
            </a>
            <style>
                @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
                    .header-blur-background {
                    }
                    }
            </style>
            <div class="header-border" data-header-style="dynamic" data-header-usability-enabled="true" data-header-border="true" data-test="header-border" style="
                    border-width: 0px 0px 4px 0px !important;
                    border-width: 0px 0px 4px 0px !important;
                    "></div>
            <div class="header-dropshadow" data-header-style="dynamic" data-header-usability-enabled="true" data-header-dropshadow="true" data-test="header-dropshadow" style="
                    box-shadow: 0px 12px 12px 0px;
                    "></div>
            <div class="header-inner container--fluid
                    header-mobile-layout-logo-left-nav-right
                    header-layout-nav-right
                    " style="
                    padding: 0 0 4px 0;
                    " data-test="header-inner">
                <!-- Background -->
                <div class="header-background theme-bg--primary"></div>
                <div class="header-display-desktop" data-content-field="site-title">
                <!-- Social -->
                <!-- Title and nav wrapper -->
                <div class="header-title-nav-wrapper">
                    <!-- Title -->
                    <div class="
                            header-title
                            header-title--use-mobile-logo
                            " data-animation-role="header-element">
                    <div class="header-title-logo">
                        <a href="https://sgrigorov.github.io/website/" data-animation-role="header-element">
                        <picture>
                            <source media="only screen and (pointer: coarse) and (max-width: 1024px), screen and (max-width: 799px)" srcset="./index_files/YESNOARTBOARD.png?format=1500w">
                            <source media="only screen and (pointer: coarse) and (min-width: 1025px), screen and (min-width: 800px)" srcset="./index_files/YESNOARTBOARD.png?format=1500w">
                            <img elementtiming="nbf-header-logo-desktop" src="./index_files/YESNOARTBOARD.png" alt="NAGHEDI Immigration Inc" style="display:block" fetchpriority="high" loading="eager" decoding="async" data-loader="raw">
                        </picture>
                        </a>
                    </div>
                    <div class="header-mobile-logo">
                        <a href="https://sgrigorov.github.io/website/" data-animation-role="header-element">
                        <picture>
                            <source media="only screen and (pointer: coarse) and (max-width: 1024px), screen and (max-width: 799px)" srcset="./index_files/YESNOARTBOARD.png?format=1500w">
                            <source media="only screen and (pointer: coarse) and (min-width: 1025px), screen and (min-width: 800px)" srcset="./index_files/YESNOARTBOARD.png?format=1500w">
                            <img elementtiming="nbf-header-logo-mobile" src="./index_files/YESNOARTBOARD.png" alt="NAGHEDI Immigration Inc" style="display:block" fetchpriority="high" loading="eager" decoding="async" data-loader="raw">
                        </picture>
                        </a>
                    </div>
                    </div>
                    <!-- Nav -->
                    <div class="header-nav">
                    <div class="header-nav-wrapper">
                        <nav class="header-nav-list">
                        <div class="header-nav-item header-nav-item--collection header-nav-item--active header-nav-item--homepage">
                            <a href="https://sgrigorov.github.io/website/" data-animation-role="header-element" aria-current="page">
                            Home
                            </a>
                        </div>
                        <div class="header-nav-item header-nav-item--collection">
                            <a href="./our-team" data-animation-role="header-element">
                            Our Team
                            </a>
                        </div>
                        <div class="header-nav-item header-nav-item--folder">
                            <a class="header-nav-folder-title" tabindex="-1" data-animation-role="header-element">
                            Services
                            </a>
                            <div class="header-nav-folder-content">
                            <div class="header-nav-folder-item">
                                <a href="./temporary-residence">
                                <span class="header-nav-folder-item-content">
                                    Temporary Residence
                                </span>
                                </a>
                            </div>
                            <div class="header-nav-folder-item">
                                <a href="./permanent-residence">
                                <span class="header-nav-folder-item-content">
                                    Permanent Residence
                                </span>
                                </a>
                            </div>
                            <div class="header-nav-folder-item">
                                <a href="./other">
                                <span class="header-nav-folder-item-content">
                                    Other
                                </span>
                                </a>
                            </div>
                            </div>
                        </div>
                        <div class="header-nav-item header-nav-item--external">
                            <a href="https://secure.officio.ca/qnr?id=4902&amp;hash=d83cf1baabcbb257f7f99f624ba3b2f0" target="_blank" data-animation-role="header-element">Free Assessment Form</a>
                        </div>
                        <div class="header-nav-item header-nav-item--external">
                            <a href="https://calendly.com/naghedi-booking/consultation-appointment" target="_blank" data-animation-role="header-element">Book Appointment</a>
                        </div>
                        </nav>
                    </div>
                    </div>
                </div>
                <!-- Actions -->
                <div class="header-actions header-actions--right">
                    <div class="showOnMobile">
                    </div>
                    <div class="showOnDesktop">
                    </div>
                </div>
                <style>
                    .top-bun,
                            .patty,
                            .bottom-bun {
                            height: 1px;
                            }
                </style>
                <!-- Burger -->
                <div class="header-burger
                            menu-overlay-has-visible-non-navigation-items
                            no-actions
                            " data-animation-role="header-element">
                    <button class="header-burger-btn burger" data-test="header-burger">
                    <span class="js-header-burger-open-title visually-hidden">Open Menu</span>
                    <span hidden="" class="js-header-burger-close-title visually-hidden">Close Menu</span>
                    <div class="burger-box">
                        <div class="burger-inner header-menu-icon-doubleLineHamburger">
                        <div class="top-bun"></div>
                        <div class="patty"></div>
                        <div class="bottom-bun"></div>
                        </div>
                    </div>
                    </button>
                </div>
                </div>
                <div class="header-display-mobile" data-content-field="site-title">
                <!-- Social -->
                <!-- Title and nav wrapper -->
                <div class="header-title-nav-wrapper">
                    <!-- Title -->
                    <div class="
                            header-title
                            header-title--use-mobile-logo
                            " data-animation-role="header-element">
                    <div class="header-title-logo">
                        <a href="https://sgrigorov.github.io/website/" data-animation-role="header-element">
                        <picture>
                            <source media="only screen and (pointer: coarse) and (max-width: 1024px), screen and (max-width: 799px)" srcset="./index_files/YESNOARTBOARD.png?format=1500w">
                            <source media="only screen and (pointer: coarse) and (min-width: 1025px), screen and (min-width: 800px)" srcset="./index_files/YESNOARTBOARD.png?format=1500w">
                            <img elementtiming="nbf-header-logo-desktop" src="./index_files/YESNOARTBOARD.png" alt="NAGHEDI Immigration Inc" style="display:block" fetchpriority="high" loading="eager" decoding="async" data-loader="raw">
                        </picture>
                        </a>
                    </div>
                    <div class="header-mobile-logo">
                        <a href="https://sgrigorov.github.io/website/" data-animation-role="header-element">
                        <picture>
                            <source media="only screen and (pointer: coarse) and (max-width: 1024px), screen and (max-width: 799px)" srcset="./index_files/YESNOARTBOARD.png?format=1500w">
                            <source media="only screen and (pointer: coarse) and (min-width: 1025px), screen and (min-width: 800px)" srcset="./index_files/YESNOARTBOARD.png?format=1500w">
                            <img elementtiming="nbf-header-logo-mobile" src="./index_files/YESNOARTBOARD.png" alt="NAGHEDI Immigration Inc" style="display:block" fetchpriority="high" loading="eager" decoding="async" data-loader="raw">
                        </picture>
                        </a>
                    </div>
                    </div>
                    <!-- Nav -->
                    <div class="header-nav">
                    <div class="header-nav-wrapper">
                        <nav class="header-nav-list">
                        <div class="header-nav-item header-nav-item--collection header-nav-item--active header-nav-item--homepage">
                            <a href="https://sgrigorov.github.io/website/" data-animation-role="header-element" aria-current="page">
                            Home
                            </a>
                        </div>
                        <div class="header-nav-item header-nav-item--collection">
                            <a href="./our-team" data-animation-role="header-element">
                            Our Team
                            </a>
                        </div>
                        <div class="header-nav-item header-nav-item--folder">
                            <a class="header-nav-folder-title" tabindex="-1" data-animation-role="header-element">
                            Services
                            </a>
                            <div class="header-nav-folder-content">
                            <div class="header-nav-folder-item">
                                <a href="./temporary-residence">
                                <span class="header-nav-folder-item-content">
                                    Temporary Residence
                                </span>
                                </a>
                            </div>
                            <div class="header-nav-folder-item">
                                <a href="./permanent-residence">
                                <span class="header-nav-folder-item-content">
                                    Permanent Residence
                                </span>
                                </a>
                            </div>
                            <div class="header-nav-folder-item">
                                <a href="./other">
                                <span class="header-nav-folder-item-content">
                                    Other
                                </span>
                                </a>
                            </div>
                            </div>
                        </div>
                        <div class="header-nav-item header-nav-item--external">
                            <a href="https://secure.officio.ca/qnr?id=4902&amp;hash=d83cf1baabcbb257f7f99f624ba3b2f0" target="_blank" data-animation-role="header-element">Free Assessment Form</a>
                        </div>
                        <div class="header-nav-item header-nav-item--external">
                            <a href="https://calendly.com/naghedi-booking/consultation-appointment" target="_blank" data-animation-role="header-element">Book Appointment</a>
                        </div>
                        </nav>
                    </div>
                    </div>
                </div>
                <!-- Actions -->
                <div class="header-actions header-actions--right">
                    <div class="showOnMobile">
                    </div>
                    <div class="showOnDesktop">
                    </div>
                </div>
                <style>
                    .top-bun,
                            .patty,
                            .bottom-bun {
                            height: 1px;
                            }
                </style>
                <!-- Burger -->
                <div class="header-burger
                            menu-overlay-has-visible-non-navigation-items
                            no-actions
                            " data-animation-role="header-element">
                    <button class="header-burger-btn burger" data-test="header-burger">
                    <span class="js-header-burger-open-title visually-hidden">Open Menu</span>
                    <span hidden="" class="js-header-burger-close-title visually-hidden">Close Menu</span>
                    <div class="burger-box">
                        <div class="burger-inner header-menu-icon-doubleLineHamburger">
                        <div class="top-bun"></div>
                        <div class="patty"></div>
                        <div class="bottom-bun"></div>
                        </div>
                    </div>
                    </button>
                </div>
                </div>
            </div>
            </div>
            <!-- (Mobile) Menu Navigation -->
            <div class="header-menu header-menu--folder-list
                " data-section-theme="" data-current-styles="{
                &quot;layout&quot;: &quot;navRight&quot;,
                &quot;action&quot;: {
                &quot;href&quot;: &quot;/session&quot;,
                &quot;buttonText&quot;: &quot;Book session&quot;,
                &quot;newWindow&quot;: false
                },
                &quot;showSocial&quot;: false,
                &quot;socialOptions&quot;: {
                &quot;socialBorderShape&quot;: &quot;none&quot;,
                &quot;socialBorderStyle&quot;: &quot;outline&quot;,
                &quot;socialBorderThickness&quot;: {
                &quot;unit&quot;: &quot;px&quot;,
                &quot;value&quot;: 1.0
                }
                },
                &quot;menuOverlayAnimation&quot;: &quot;fade&quot;,
                &quot;cartStyle&quot;: &quot;cart&quot;,
                &quot;cartText&quot;: &quot;Cart&quot;,
                &quot;showEmptyCartState&quot;: true,
                &quot;cartOptions&quot;: {
                &quot;iconType&quot;: &quot;stroke-1&quot;,
                &quot;cartBorderShape&quot;: &quot;none&quot;,
                &quot;cartBorderStyle&quot;: &quot;outline&quot;,
                &quot;cartBorderThickness&quot;: {
                &quot;unit&quot;: &quot;px&quot;,
                &quot;value&quot;: 1.0
                }
                },
                &quot;showButton&quot;: false,
                &quot;showCart&quot;: false,
                &quot;showAccountLogin&quot;: true,
                &quot;headerStyle&quot;: &quot;dynamic&quot;,
                &quot;languagePicker&quot;: {
                &quot;enabled&quot;: false,
                &quot;iconEnabled&quot;: false,
                &quot;iconType&quot;: &quot;globe&quot;,
                &quot;flagShape&quot;: &quot;shiny&quot;,
                &quot;languageFlags&quot;: [ ]
                },
                &quot;mobileOptions&quot;: {
                &quot;layout&quot;: &quot;logoLeftNavRight&quot;,
                &quot;menuIcon&quot;: &quot;doubleLineHamburger&quot;,
                &quot;menuIconOptions&quot;: {
                &quot;style&quot;: &quot;doubleLineHamburger&quot;,
                &quot;thickness&quot;: {
                &quot;unit&quot;: &quot;px&quot;,
                &quot;value&quot;: 1.0
                }
                }
                },
                &quot;dynamicOptions&quot;: {
                &quot;border&quot;: {
                &quot;enabled&quot;: true,
                &quot;position&quot;: &quot;bottom&quot;,
                &quot;thickness&quot;: {
                &quot;unit&quot;: &quot;px&quot;,
                &quot;value&quot;: 4.0
                },
                &quot;color&quot;: {
                &quot;type&quot;: &quot;SITE_PALETTE_COLOR&quot;,
                &quot;sitePaletteColor&quot;: {
                &quot;colorName&quot;: &quot;lightAccent&quot;,
                &quot;alphaModifier&quot;: 0.01
                }
                }
                }
                },
                &quot;solidOptions&quot;: {
                &quot;headerOpacity&quot;: {
                &quot;unit&quot;: &quot;%&quot;,
                &quot;value&quot;: 100.0
                },
                &quot;border&quot;: {
                &quot;enabled&quot;: true,
                &quot;position&quot;: &quot;bottom&quot;,
                &quot;thickness&quot;: {
                &quot;unit&quot;: &quot;px&quot;,
                &quot;value&quot;: 1.0
                },
                &quot;color&quot;: {
                &quot;type&quot;: &quot;SITE_PALETTE_COLOR&quot;,
                &quot;sitePaletteColor&quot;: {
                &quot;colorName&quot;: &quot;black&quot;,
                &quot;alphaModifier&quot;: 1.0
                }
                }
                },
                &quot;dropShadow&quot;: {
                &quot;enabled&quot;: false,
                &quot;blur&quot;: {
                &quot;unit&quot;: &quot;px&quot;,
                &quot;value&quot;: 12.0
                },
                &quot;spread&quot;: {
                &quot;unit&quot;: &quot;px&quot;,
                &quot;value&quot;: 0.0
                },
                &quot;distance&quot;: {
                &quot;unit&quot;: &quot;px&quot;,
                &quot;value&quot;: 12.0
                }
                },
                &quot;blurBackground&quot;: {
                &quot;enabled&quot;: false,
                &quot;blurRadius&quot;: {
                &quot;unit&quot;: &quot;px&quot;,
                &quot;value&quot;: 12.0
                }
                },
                &quot;backgroundColor&quot;: {
                &quot;type&quot;: &quot;SITE_PALETTE_COLOR&quot;,
                &quot;sitePaletteColor&quot;: {
                &quot;colorName&quot;: &quot;white&quot;,
                &quot;alphaModifier&quot;: 1.0
                }
                },
                &quot;navigationColor&quot;: {
                &quot;type&quot;: &quot;SITE_PALETTE_COLOR&quot;,
                &quot;sitePaletteColor&quot;: {
                &quot;colorName&quot;: &quot;black&quot;,
                &quot;alphaModifier&quot;: 1.0
                }
                }
                },
                &quot;gradientOptions&quot;: {
                &quot;gradientType&quot;: &quot;faded&quot;,
                &quot;headerOpacity&quot;: {
                &quot;unit&quot;: &quot;%&quot;,
                &quot;value&quot;: 100.0
                },
                &quot;border&quot;: {
                &quot;enabled&quot;: true,
                &quot;position&quot;: &quot;bottom&quot;,
                &quot;thickness&quot;: {
                &quot;unit&quot;: &quot;px&quot;,
                &quot;value&quot;: 1.0
                },
                &quot;color&quot;: {
                &quot;type&quot;: &quot;SITE_PALETTE_COLOR&quot;,
                &quot;sitePaletteColor&quot;: {
                &quot;colorName&quot;: &quot;white&quot;,
                &quot;alphaModifier&quot;: 0.01
                }
                }
                },
                &quot;dropShadow&quot;: {
                &quot;enabled&quot;: true,
                &quot;blur&quot;: {
                &quot;unit&quot;: &quot;px&quot;,
                &quot;value&quot;: 12.0
                },
                &quot;spread&quot;: {
                &quot;unit&quot;: &quot;px&quot;,
                &quot;value&quot;: 0.0
                },
                &quot;distance&quot;: {
                &quot;unit&quot;: &quot;px&quot;,
                &quot;value&quot;: 12.0
                }
                },
                &quot;blurBackground&quot;: {
                &quot;enabled&quot;: true,
                &quot;blurRadius&quot;: {
                &quot;unit&quot;: &quot;px&quot;,
                &quot;value&quot;: 12.0
                }
                },
                &quot;backgroundColor&quot;: {
                &quot;type&quot;: &quot;SITE_PALETTE_COLOR&quot;,
                &quot;sitePaletteColor&quot;: {
                &quot;colorName&quot;: &quot;white&quot;,
                &quot;alphaModifier&quot;: 1.0
                }
                },
                &quot;navigationColor&quot;: {
                &quot;type&quot;: &quot;SITE_PALETTE_COLOR&quot;,
                &quot;sitePaletteColor&quot;: {
                &quot;colorName&quot;: &quot;white&quot;,
                &quot;alphaModifier&quot;: 1.0
                }
                }
                },
                &quot;dropShadowOptions&quot;: {
                &quot;enabled&quot;: true,
                &quot;blur&quot;: {
                &quot;unit&quot;: &quot;px&quot;,
                &quot;value&quot;: 12.0
                },
                &quot;spread&quot;: {
                &quot;unit&quot;: &quot;px&quot;,
                &quot;value&quot;: 0.0
                },
                &quot;distance&quot;: {
                &quot;unit&quot;: &quot;px&quot;,
                &quot;value&quot;: 12.0
                },
                &quot;color&quot;: {
                &quot;type&quot;: &quot;SITE_PALETTE_COLOR&quot;,
                &quot;sitePaletteColor&quot;: {
                &quot;colorName&quot;: &quot;lightAccent&quot;,
                &quot;alphaModifier&quot;: 1.0
                }
                }
                },
                &quot;borderOptions&quot;: {
                &quot;enabled&quot;: true,
                &quot;position&quot;: &quot;bottom&quot;,
                &quot;thickness&quot;: {
                &quot;unit&quot;: &quot;px&quot;,
                &quot;value&quot;: 4.0
                },
                &quot;color&quot;: {
                &quot;type&quot;: &quot;SITE_PALETTE_COLOR&quot;,
                &quot;sitePaletteColor&quot;: {
                &quot;colorName&quot;: &quot;lightAccent&quot;,
                &quot;alphaModifier&quot;: 0.01
                }
                }
                },
                &quot;showPromotedElement&quot;: false,
                &quot;buttonVariant&quot;: &quot;primary&quot;,
                &quot;blurBackground&quot;: {
                &quot;enabled&quot;: false,
                &quot;blurRadius&quot;: {
                &quot;unit&quot;: &quot;px&quot;,
                &quot;value&quot;: 12.0
                }
                },
                &quot;headerOpacity&quot;: {
                &quot;unit&quot;: &quot;%&quot;,
                &quot;value&quot;: 100.0
                }
                }" data-section-id="overlay-nav" data-show-account-login="true" data-test="header-menu" style="padding-top: 184.141px;">
            <div class="header-menu-bg theme-bg--primary"></div>
            <div class="header-menu-nav">
                <nav class="header-menu-nav-list">
                <div data-folder="root" class="header-menu-nav-folder header-menu-nav-folder--active">
                    <div class="header-menu-nav-folder-content">
                    <!-- Menu Navigation -->
                    <div class="header-menu-nav-wrapper">
                        <div class="container header-menu-nav-item header-menu-nav-item--collection header-menu-nav-item--active header-menu-nav-item--homepage">
                        <a href="https://sgrigorov.github.io/website/" aria-current="page">
                            <div class="header-menu-nav-item-content">
                            Home
                            </div>
                        </a>
                        </div>
                        <div class="container header-menu-nav-item header-menu-nav-item--collection">
                        <a href="./our-team">
                            <div class="header-menu-nav-item-content">
                            Our Team
                            </div>
                        </a>
                        </div>
                        <div class="container header-menu-nav-item">
                        <a data-folder-id="/services-2" href="https://www.naghedi-immigration.ca/services-2">
                            <div class="header-menu-nav-item-content">
                            <span class="visually-hidden">Folder:</span>
                            <span>Services</span>
                            <span class="chevron chevron--right"></span>
                            </div>
                        </a>
                        </div>
                        <div class="container header-menu-nav-item header-menu-nav-item--external">
                        <a href="https://secure.officio.ca/qnr?id=4902&amp;hash=d83cf1baabcbb257f7f99f624ba3b2f0" target="_blank">Free Assessment Form</a>
                        </div>
                        <div class="container header-menu-nav-item header-menu-nav-item--external">
                        <a href="https://calendly.com/naghedi-booking/consultation-appointment" target="_blank">Book Appointment</a>
                        </div>
                    </div>
                    </div>
                </div>
                <div data-folder="/services-2" class="header-menu-nav-folder">
                    <div class="header-menu-nav-folder-content">
                    <div class="header-menu-controls container header-menu-nav-item">
                        <a class="header-menu-controls-control header-menu-controls-control--active" data-action="back" href="https://www.naghedi-immigration.ca/" tabindex="-1">
                        <span class="chevron chevron--left"></span><span>Back</span>
                        </a>
                    </div>
                    <div class="container header-menu-nav-item">
                        <a href="./temporary-residence" tabindex="-1">
                        <div class="header-menu-nav-item-content">
                            Temporary Residence
                        </div>
                        </a>
                    </div>
                    <div class="container header-menu-nav-item">
                        <a href="./permanent-residence" tabindex="-1">
                        <div class="header-menu-nav-item-content">
                            Permanent Residence
                        </div>
                        </a>
                    </div>
                    <div class="container header-menu-nav-item">
                        <a href="./other" tabindex="-1">
                        <div class="header-menu-nav-item-content">
                            Other
                        </div>
                        </a>
                    </div>
                    </div>
                </div>
                </nav>
            </div>
            </div>
        </header>
        `
    }
}


class WebsiteHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="sections" id="footer-sections" data-footer-sections="">
                <section data-test="page-section" data-section-theme="bright-inverse" class="page-section
                        full-bleed-section
                        layout-engine-section
                        background-width--full-bleed
                        content-width--wide
                        horizontal-alignment--center
                        vertical-alignment--bottom
                        bright-inverse" data-section-id="6593abc53b38c97cdaf5a35e" data-controller="SectionWrapperController" data-current-styles="{
                        &quot;backgroundImage&quot;: {
                        &quot;id&quot;: &quot;659498e2180bdf4aae123dfd&quot;,
                        &quot;recordType&quot;: 2,
                        &quot;addedOn&quot;: 1704237282775,
                        &quot;updatedOn&quot;: 1705399245962,
                        &quot;workflowState&quot;: 1,
                        &quot;publishOn&quot;: 1704237282775,
                        &quot;authorId&quot;: &quot;6593abc22f34497e137156cb&quot;,
                        &quot;systemDataId&quot;: &quot;699cd2b1-36ca-437d-b13a-cd7089e6f45f&quot;,
                        &quot;systemDataVariants&quot;: &quot;2500x1667,100w,300w,500w,750w,1000w,1500w,2500w&quot;,
                        &quot;systemDataSourceType&quot;: &quot;JPG&quot;,
                        &quot;filename&quot;: &quot;image-asset.jpg&quot;,
                        &quot;mediaFocalPoint&quot;: {
                        &quot;x&quot;: 0.5,
                        &quot;y&quot;: 0.5,
                        &quot;source&quot;: 3
                        },
                        &quot;colorData&quot;: {
                        &quot;topLeftAverage&quot;: &quot;be957a&quot;,
                        &quot;topRightAverage&quot;: &quot;d6ad91&quot;,
                        &quot;bottomLeftAverage&quot;: &quot;c9915d&quot;,
                        &quot;bottomRightAverage&quot;: &quot;d5a650&quot;,
                        &quot;centerAverage&quot;: &quot;be9073&quot;,
                        &quot;suggestedBgColor&quot;: &quot;ab7c61&quot;
                        },
                        &quot;urlId&quot;: &quot;3p674ino70550mvxcc1atf95sbjqpr&quot;,
                        &quot;title&quot;: &quot;&quot;,
                        &quot;body&quot;: null,
                        &quot;likeCount&quot;: 0,
                        &quot;commentCount&quot;: 0,
                        &quot;publicCommentCount&quot;: 0,
                        &quot;commentState&quot;: 2,
                        &quot;unsaved&quot;: false,
                        &quot;author&quot;: {
                        &quot;id&quot;: &quot;6593abc22f34497e137156cb&quot;,
                        &quot;displayName&quot;: &quot;Sara Naghedi-Ahmadi&quot;,
                        &quot;firstName&quot;: &quot;Sara&quot;,
                        &quot;lastName&quot;: &quot;Naghedi-Ahmadi&quot;,
                        &quot;avatarUrl&quot;: &quot;https://images.squarespace-cdn.com/content/v2/namespaces/memberAccountAvatars/libraries/6593abc22f34497e137156cb/8297b816-0aae-45e7-b4fc-e85a8e6dc933/Capture.PNG?format=300w&quot;,
                        &quot;bio&quot;: &quot;&quot;,
                        &quot;avatarAssetUrl&quot;: &quot;https://images.squarespace-cdn.com/content/v2/namespaces/memberAccountAvatars/libraries/6593abc22f34497e137156cb/8297b816-0aae-45e7-b4fc-e85a8e6dc933/Capture.PNG?format=300w&quot;
                        },
                        &quot;assetUrl&quot;: &quot;https://images.squarespace-cdn.com/content/v1/6593abc53b38c97cdaf5a338/699cd2b1-36ca-437d-b13a-cd7089e6f45f/image-asset.jpg&quot;,
                        &quot;contentType&quot;: &quot;image/jpeg&quot;,
                        &quot;items&quot;: [ ],
                        &quot;pushedServices&quot;: { },
                        &quot;pendingPushedServices&quot;: { },
                        &quot;originalSize&quot;: &quot;2500x1667&quot;,
                        &quot;recordTypeLabel&quot;: &quot;image&quot;
                        },
                        &quot;imageOverlayOpacity&quot;: 0.15,
                        &quot;backgroundWidth&quot;: &quot;background-width--full-bleed&quot;,
                        &quot;customSectionHeight&quot;: 1,
                        &quot;horizontalAlignment&quot;: &quot;horizontal-alignment--center&quot;,
                        &quot;verticalAlignment&quot;: &quot;vertical-alignment--bottom&quot;,
                        &quot;contentWidth&quot;: &quot;content-width--wide&quot;,
                        &quot;customContentWidth&quot;: 50,
                        &quot;sectionTheme&quot;: &quot;bright-inverse&quot;,
                        &quot;sectionAnimation&quot;: &quot;none&quot;,
                        &quot;backgroundMode&quot;: &quot;video&quot;,
                        &quot;generative&quot;: {
                        &quot;type&quot;: &quot;conic&quot;,
                        &quot;seed&quot;: 0,
                        &quot;count&quot;: 0,
                        &quot;size&quot;: 0,
                        &quot;speed&quot;: 20,
                        &quot;color1&quot;: {
                        &quot;type&quot;: &quot;SITE_PALETTE_COLOR&quot;,
                        &quot;sitePaletteColor&quot;: {
                        &quot;id&quot;: &quot;lightAccent&quot;,
                        &quot;alpha&quot;: 1.0
                        }
                        },
                        &quot;color2&quot;: {
                        &quot;type&quot;: &quot;SITE_PALETTE_COLOR&quot;,
                        &quot;sitePaletteColor&quot;: {
                        &quot;id&quot;: &quot;accent&quot;,
                        &quot;alpha&quot;: 1.0
                        }
                        },
                        &quot;color3&quot;: {
                        &quot;type&quot;: &quot;SITE_PALETTE_COLOR&quot;,
                        &quot;sitePaletteColor&quot;: {
                        &quot;id&quot;: &quot;white&quot;,
                        &quot;alpha&quot;: 1.0
                        }
                        },
                        &quot;invertColors&quot;: false,
                        &quot;noiseIntensity&quot;: 9,
                        &quot;noiseScale&quot;: 14,
                        &quot;distortionScaleX&quot;: 0,
                        &quot;distortionScaleY&quot;: 66,
                        &quot;distortionSpeed&quot;: 50,
                        &quot;distortionIntensity&quot;: 47,
                        &quot;lightIntensity&quot;: 0,
                        &quot;lightX&quot;: 0,
                        &quot;bevelRotation&quot;: 0,
                        &quot;bevelSize&quot;: 0,
                        &quot;bevelStrength&quot;: 0,
                        &quot;complexity&quot;: 0,
                        &quot;cutoff&quot;: 0,
                        &quot;isBevelEnabled&quot;: false,
                        &quot;isBlurEnabled&quot;: false,
                        &quot;scale&quot;: 0,
                        &quot;speedMorph&quot;: 0,
                        &quot;speedTravel&quot;: 0,
                        &quot;steps&quot;: 0,
                        &quot;travelDirection&quot;: 0,
                        &quot;noiseBias&quot;: 0,
                        &quot;animateNoise&quot;: false,
                        &quot;distortionComplexity&quot;: 0,
                        &quot;distortionDirection&quot;: 0,
                        &quot;distortionMorphSpeed&quot;: 0,
                        &quot;distortionSeed&quot;: 0,
                        &quot;distortionSmoothness&quot;: 0,
                        &quot;linearGradientStartColorDistance&quot;: 0,
                        &quot;linearGradientEndColorDistance&quot;: 0,
                        &quot;linearGradientAngle&quot;: 0,
                        &quot;linearGradientAngleMotion&quot;: 0,
                        &quot;linearGradientRepeat&quot;: 0,
                        &quot;radialGradientRadius&quot;: 0,
                        &quot;radialGradientPositionX&quot;: 0,
                        &quot;radialGradientPositionY&quot;: 0,
                        &quot;radialGradientFollowCursor&quot;: false,
                        &quot;radialGradientFollowSpeed&quot;: 0,
                        &quot;imageScale&quot;: 0,
                        &quot;imageCount&quot;: 0,
                        &quot;patternEnabled&quot;: false,
                        &quot;patternSize&quot;: 0,
                        &quot;patternOffsetX&quot;: 0,
                        &quot;patternOffsetY&quot;: 0,
                        &quot;patternSpaceX&quot;: 0,
                        &quot;patternSpaceY&quot;: 0,
                        &quot;waveEnabled&quot;: false,
                        &quot;waveSpeed&quot;: 0,
                        &quot;waveComplexity&quot;: 0,
                        &quot;waveDepth&quot;: 0,
                        &quot;waveShadowDepth&quot;: 0,
                        &quot;boxSize&quot;: 0.0,
                        &quot;scaleX&quot;: 0,
                        &quot;scaleY&quot;: 0,
                        &quot;scaleZ&quot;: 0,
                        &quot;isMorphEnabled&quot;: false,
                        &quot;lightY&quot;: 0,
                        &quot;lightZ&quot;: 0,
                        &quot;noiseRange&quot;: 0,
                        &quot;positionFactor&quot;: 0,
                        &quot;scaleFactor&quot;: 0,
                        &quot;colorFactor&quot;: 0,
                        &quot;sizeVariance&quot;: 0,
                        &quot;wobble&quot;: 0,
                        &quot;morph&quot;: 0,
                        &quot;scrollMovement&quot;: 0,
                        &quot;patternScaleX&quot;: 0,
                        &quot;patternScaleY&quot;: 0,
                        &quot;patternPowerX&quot;: 0,
                        &quot;patternPowerY&quot;: 0,
                        &quot;patternAmount&quot;: 0,
                        &quot;surfaceHeight&quot;: 0,
                        &quot;colorStop1&quot;: 0,
                        &quot;colorStop2&quot;: 0,
                        &quot;colorStop3&quot;: 0,
                        &quot;colorStop4&quot;: 0,
                        &quot;gradientDistortionX&quot;: 0,
                        &quot;gradientDistortionY&quot;: 0,
                        &quot;curveX&quot;: 61,
                        &quot;curveY&quot;: 46,
                        &quot;curveFunnel&quot;: 92,
                        &quot;fogIntensity&quot;: 53,
                        &quot;repeat&quot;: 3,
                        &quot;rotation&quot;: 280,
                        &quot;rotationSpeed&quot;: 0,
                        &quot;blur&quot;: 34,
                        &quot;complexityY&quot;: 0,
                        &quot;complexityZ&quot;: 0,
                        &quot;amplitudeY&quot;: 0,
                        &quot;amplitudeZ&quot;: 0,
                        &quot;offset&quot;: 0,
                        &quot;lightAngle&quot;: 0,
                        &quot;alpha&quot;: 0
                        }
                        }" data-current-context="{
                        &quot;video&quot;: {
                        &quot;playbackSpeed&quot;: 0.5,
                        &quot;filter&quot;: 1,
                        &quot;filterStrength&quot;: 0,
                        &quot;zoom&quot;: 0,
                        &quot;videoSourceProvider&quot;: &quot;none&quot;
                        },
                        &quot;backgroundImageId&quot;: null,
                        &quot;backgroundMediaEffect&quot;: {
                        &quot;type&quot;: &quot;none&quot;
                        },
                        &quot;divider&quot;: {
                        &quot;enabled&quot;: false
                        },
                        &quot;typeName&quot;: &quot;page&quot;
                        }" data-animation="none" data-fluid-engine-section="" data-controllers-bound="SectionWrapperController" id="yui_3_17_2_1_1730408054336_77">
                    <div class="section-border">
                    <div class="section-background">
                    </div>
                    </div>
                    <div class="content-wrapper" style="
                            " id="yui_3_17_2_1_1730408054336_76">
                    <div class="content" id="yui_3_17_2_1_1730408054336_75">
                        <div data-fluid-engine="true" id="yui_3_17_2_1_1730408054336_74">
                        <style>
                            .fe-6593abc53b38c97cdaf5a35d {
                                    --grid-gutter: calc(var(--sqs-mobile-site-gutter, 6vw) - 0.0px);
                                    --cell-max-width: calc( ( var(--sqs-site-max-width, 1500px) - (0.0px * (8 - 1)) ) / 8 );
                                    display: grid;
                                    position: relative;
                                    grid-area: 1/1/-1/-1;
                                    grid-template-rows: repeat(146,minmax(24px, auto));
                                    grid-template-columns:
                                    minmax(var(--grid-gutter), 1fr)
                                    repeat(8, minmax(0, var(--cell-max-width)))
                                    minmax(var(--grid-gutter), 1fr);
                                    row-gap: 0.0px;
                                    column-gap: 0.0px;
                                    }
                                    @media (min-width: 768px) {
                                    .background-width--inset .fe-6593abc53b38c97cdaf5a35d {
                                    --inset-padding: calc(var(--sqs-site-gutter) * 2);
                                    }
                                    .fe-6593abc53b38c97cdaf5a35d {
                                    --grid-gutter: calc(var(--sqs-site-gutter, 4vw) - 0.0px);
                                    --cell-max-width: calc( ( var(--sqs-site-max-width, 1500px) - (0.0px * (24 - 1)) ) / 24 );
                                    --inset-padding: 0vw;
                                    --row-height-scaling-factor: 0.0215;
                                    --container-width: min(var(--sqs-site-max-width, 1500px), calc(100vw - var(--sqs-site-gutter, 4vw) * 2 - var(--inset-padding) ));
                                    grid-template-rows: repeat(57,minmax(calc(var(--container-width) * var(--row-height-scaling-factor)), auto));
                                    grid-template-columns:
                                    minmax(var(--grid-gutter), 1fr)
                                    repeat(24, minmax(0, var(--cell-max-width)))
                                    minmax(var(--grid-gutter), 1fr);
                                    }
                                    }
                                    .fe-block-1acad85a90557589a360 {
                                    grid-area: 1/2/10/10;
                                    z-index: 1;
                                    @media (max-width: 767px) {
                                    }
                                    }
                                    .fe-block-1acad85a90557589a360 .sqs-block {
                                    justify-content: center;
                                    }
                                    .fe-block-1acad85a90557589a360 .sqs-block-alignment-wrapper {
                                    align-items: center;
                                    }
                                    @media (min-width: 768px) {
                                    .fe-block-1acad85a90557589a360 {
                                    grid-area: 4/5/8/23;
                                    z-index: 1;
                                    }
                                    .fe-block-1acad85a90557589a360 .sqs-block {
                                    justify-content: center;
                                    }
                                    .fe-block-1acad85a90557589a360 .sqs-block-alignment-wrapper {
                                    align-items: center;
                                    }
                                    }
                                    .fe-block-81e9c99cb8f387900f52 {
                                    grid-area: 9/3/12/9;
                                    z-index: 2;
                                    @media (max-width: 767px) {
                                    }
                                    }
                                    .fe-block-81e9c99cb8f387900f52 .sqs-block {
                                    justify-content: center;
                                    }
                                    .fe-block-81e9c99cb8f387900f52 .sqs-block-alignment-wrapper {
                                    align-items: center;
                                    }
                                    @media (min-width: 768px) {
                                    .fe-block-81e9c99cb8f387900f52 {
                                    grid-area: 9/11/11/17;
                                    z-index: 2;
                                    }
                                    .fe-block-81e9c99cb8f387900f52 .sqs-block {
                                    justify-content: center;
                                    }
                                    .fe-block-81e9c99cb8f387900f52 .sqs-block-alignment-wrapper {
                                    align-items: center;
                                    }
                                    }
                                    .fe-block-7cbd4ecd4562c6d8b667 {
                                    grid-area: 12/3/15/9;
                                    z-index: 3;
                                    @media (max-width: 767px) {
                                    }
                                    }
                                    .fe-block-7cbd4ecd4562c6d8b667 .sqs-block {
                                    justify-content: center;
                                    }
                                    .fe-block-7cbd4ecd4562c6d8b667 .sqs-block-alignment-wrapper {
                                    align-items: center;
                                    }
                                    @media (min-width: 768px) {
                                    .fe-block-7cbd4ecd4562c6d8b667 {
                                    grid-area: 12/11/14/17;
                                    z-index: 3;
                                    }
                                    .fe-block-7cbd4ecd4562c6d8b667 .sqs-block {
                                    justify-content: center;
                                    }
                                    .fe-block-7cbd4ecd4562c6d8b667 .sqs-block-alignment-wrapper {
                                    align-items: center;
                                    }
                                    }
                                    .fe-block-yui_3_17_2_1_1713753864462_79768 {
                                    grid-area: 17/2/21/10;
                                    z-index: 23;
                                    @media (max-width: 767px) {
                                    }
                                    }
                                    .fe-block-yui_3_17_2_1_1713753864462_79768 .sqs-block {
                                    justify-content: flex-start;
                                    }
                                    .fe-block-yui_3_17_2_1_1713753864462_79768 .sqs-block-alignment-wrapper {
                                    align-items: flex-start;
                                    }
                                    @media (min-width: 768px) {
                                    .fe-block-yui_3_17_2_1_1713753864462_79768 {
                                    grid-area: 27/3/30/10;
                                    z-index: 23;
                                    }
                                    .fe-block-yui_3_17_2_1_1713753864462_79768 .sqs-block {
                                    justify-content: flex-start;
                                    }
                                    .fe-block-yui_3_17_2_1_1713753864462_79768 .sqs-block-alignment-wrapper {
                                    align-items: flex-start;
                                    }
                                    }
                                    .fe-block-yui_3_17_2_1_1713753864462_81440 {
                                    grid-area: 21/2/27/10;
                                    z-index: 24;
                                    @media (max-width: 767px) {
                                    }
                                    }
                                    .fe-block-yui_3_17_2_1_1713753864462_81440 .sqs-block {
                                    justify-content: center;
                                    }
                                    .fe-block-yui_3_17_2_1_1713753864462_81440 .sqs-block-alignment-wrapper {
                                    align-items: center;
                                    }
                                    @media (min-width: 768px) {
                                    .fe-block-yui_3_17_2_1_1713753864462_81440 {
                                    grid-area: 22/3/27/8;
                                    z-index: 24;
                                    }
                                    .fe-block-yui_3_17_2_1_1713753864462_81440 .sqs-block {
                                    justify-content: center;
                                    }
                                    .fe-block-yui_3_17_2_1_1713753864462_81440 .sqs-block-alignment-wrapper {
                                    align-items: center;
                                    }
                                    }
                                    .fe-block-yui_3_17_2_1_1713753864462_67627 {
                                    grid-area: 28/4/30/8;
                                    z-index: 22;
                                    @media (max-width: 767px) {
                                    }
                                    }
                                    .fe-block-yui_3_17_2_1_1713753864462_67627 .sqs-block {
                                    justify-content: flex-start;
                                    }
                                    .fe-block-yui_3_17_2_1_1713753864462_67627 .sqs-block-alignment-wrapper {
                                    align-items: flex-start;
                                    }
                                    @media (min-width: 768px) {
                                    .fe-block-yui_3_17_2_1_1713753864462_67627 {
                                    grid-area: 27/18/28/24;
                                    z-index: 22;
                                    }
                                    .fe-block-yui_3_17_2_1_1713753864462_67627 .sqs-block {
                                    justify-content: flex-start;
                                    }
                                    .fe-block-yui_3_17_2_1_1713753864462_67627 .sqs-block-alignment-wrapper {
                                    align-items: flex-start;
                                    }
                                    }
                                    .fe-block-yui_3_17_2_1_1713753864462_65458 {
                                    grid-area: 30/3/33/9;
                                    z-index: 21;
                                    @media (max-width: 767px) {
                                    }
                                    }
                                    .fe-block-yui_3_17_2_1_1713753864462_65458 .sqs-block {
                                    justify-content: flex-start;
                                    }
                                    .fe-block-yui_3_17_2_1_1713753864462_65458 .sqs-block-alignment-wrapper {
                                    align-items: flex-start;
                                    }
                                    @media (min-width: 768px) {
                                    .fe-block-yui_3_17_2_1_1713753864462_65458 {
                                    grid-area: 28/18/29/25;
                                    z-index: 21;
                                    }
                                    .fe-block-yui_3_17_2_1_1713753864462_65458 .sqs-block {
                                    justify-content: flex-start;
                                    }
                                    .fe-block-yui_3_17_2_1_1713753864462_65458 .sqs-block-alignment-wrapper {
                                    align-items: flex-start;
                                    }
                                    }
                                    .fe-block-yui_3_17_2_1_1713753864462_64300 {
                                    grid-area: 34/2/61/10;
                                    z-index: 20;
                                    @media (max-width: 767px) {
                                    }
                                    }
                                    .fe-block-yui_3_17_2_1_1713753864462_64300 .sqs-block {
                                    justify-content: flex-start;
                                    }
                                    .fe-block-yui_3_17_2_1_1713753864462_64300 .sqs-block-alignment-wrapper {
                                    align-items: flex-start;
                                    }
                                    @media (min-width: 768px) {
                                    .fe-block-yui_3_17_2_1_1713753864462_64300 {
                                    grid-area: 29/18/47/26;
                                    z-index: 20;
                                    }
                                    .fe-block-yui_3_17_2_1_1713753864462_64300 .sqs-block {
                                    justify-content: flex-start;
                                    }
                                    .fe-block-yui_3_17_2_1_1713753864462_64300 .sqs-block-alignment-wrapper {
                                    align-items: flex-start;
                                    }
                                    }
                                    .fe-block-yui_3_17_2_1_1713753864462_21548 {
                                    grid-area: 62/2/64/10;
                                    z-index: 16;
                                    @media (max-width: 767px) {
                                    }
                                    }
                                    .fe-block-yui_3_17_2_1_1713753864462_21548 .sqs-block {
                                    justify-content: flex-start;
                                    }
                                    .fe-block-yui_3_17_2_1_1713753864462_21548 .sqs-block-alignment-wrapper {
                                    align-items: flex-start;
                                    }
                                    @media (min-width: 768px) {
                                    .fe-block-yui_3_17_2_1_1713753864462_21548 {
                                    grid-area: 27/11/28/14;
                                    z-index: 16;
                                    }
                                    .fe-block-yui_3_17_2_1_1713753864462_21548 .sqs-block {
                                    justify-content: flex-start;
                                    }
                                    .fe-block-yui_3_17_2_1_1713753864462_21548 .sqs-block-alignment-wrapper {
                                    align-items: flex-start;
                                    }
                                    }
                                    .fe-block-yui_3_17_2_1_1713753864462_23233 {
                                    grid-area: 64/2/86/10;
                                    z-index: 17;
                                    @media (max-width: 767px) {
                                    }
                                    }
                                    .fe-block-yui_3_17_2_1_1713753864462_23233 .sqs-block {
                                    justify-content: flex-start;
                                    }
                                    .fe-block-yui_3_17_2_1_1713753864462_23233 .sqs-block-alignment-wrapper {
                                    align-items: flex-start;
                                    }
                                    @media (min-width: 768px) {
                                    .fe-block-yui_3_17_2_1_1713753864462_23233 {
                                    grid-area: 28/11/43/17;
                                    z-index: 17;
                                    }
                                    .fe-block-yui_3_17_2_1_1713753864462_23233 .sqs-block {
                                    justify-content: flex-start;
                                    }
                                    .fe-block-yui_3_17_2_1_1713753864462_23233 .sqs-block-alignment-wrapper {
                                    align-items: flex-start;
                                    }
                                    }
                                    .fe-block-64e502f25d54a06a9666 {
                                    grid-area: 88/2/90/5;
                                    z-index: 2;
                                    @media (max-width: 767px) {
                                    }
                                    }
                                    .fe-block-64e502f25d54a06a9666 .sqs-block {
                                    justify-content: flex-start;
                                    }
                                    .fe-block-64e502f25d54a06a9666 .sqs-block-alignment-wrapper {
                                    align-items: flex-start;
                                    }
                                    @media (min-width: 768px) {
                                    .fe-block-64e502f25d54a06a9666 {
                                    grid-area: 43/11/44/13;
                                    z-index: 2;
                                    }
                                    .fe-block-64e502f25d54a06a9666 .sqs-block {
                                    justify-content: flex-start;
                                    }
                                    .fe-block-64e502f25d54a06a9666 .sqs-block-alignment-wrapper {
                                    align-items: flex-start;
                                    }
                                    }
                                    .fe-block-b1dedbd730c26b47cca1 {
                                    grid-area: 88/7/90/10;
                                    z-index: 3;
                                    @media (max-width: 767px) {
                                    }
                                    }
                                    .fe-block-b1dedbd730c26b47cca1 .sqs-block {
                                    justify-content: flex-start;
                                    }
                                    .fe-block-b1dedbd730c26b47cca1 .sqs-block-alignment-wrapper {
                                    align-items: flex-start;
                                    }
                                    @media (min-width: 768px) {
                                    .fe-block-b1dedbd730c26b47cca1 {
                                    grid-area: 52/11/53/15;
                                    z-index: 3;
                                    }
                                    .fe-block-b1dedbd730c26b47cca1 .sqs-block {
                                    justify-content: flex-start;
                                    }
                                    .fe-block-b1dedbd730c26b47cca1 .sqs-block-alignment-wrapper {
                                    align-items: flex-start;
                                    }
                                    }
                                    .fe-block-f36aebc39756237596f9 {
                                    grid-area: 90/2/101/7;
                                    z-index: 12;
                                    @media (max-width: 767px) {
                                    }
                                    }
                                    .fe-block-f36aebc39756237596f9 .sqs-block {
                                    justify-content: flex-start;
                                    }
                                    .fe-block-f36aebc39756237596f9 .sqs-block-alignment-wrapper {
                                    align-items: flex-start;
                                    }
                                    @media (min-width: 768px) {
                                    .fe-block-f36aebc39756237596f9 {
                                    grid-area: 44/11/51/14;
                                    z-index: 12;
                                    }
                                    .fe-block-f36aebc39756237596f9 .sqs-block {
                                    justify-content: flex-start;
                                    }
                                    .fe-block-f36aebc39756237596f9 .sqs-block-alignment-wrapper {
                                    align-items: flex-start;
                                    }
                                    }
                                    .fe-block-ec20c1ec639b9b06a264 {
                                    grid-area: 91/7/101/10;
                                    z-index: 13;
                                    @media (max-width: 767px) {
                                    }
                                    }
                                    .fe-block-ec20c1ec639b9b06a264 .sqs-block {
                                    justify-content: flex-start;
                                    }
                                    .fe-block-ec20c1ec639b9b06a264 .sqs-block-alignment-wrapper {
                                    align-items: flex-start;
                                    }
                                    @media (min-width: 768px) {
                                    .fe-block-ec20c1ec639b9b06a264 {
                                    grid-area: 53/11/57/14;
                                    z-index: 13;
                                    }
                                    .fe-block-ec20c1ec639b9b06a264 .sqs-block {
                                    justify-content: flex-start;
                                    }
                                    .fe-block-ec20c1ec639b9b06a264 .sqs-block-alignment-wrapper {
                                    align-items: flex-start;
                                    }
                                    }
                                    .fe-block-yui_3_17_2_1_1713753864462_34357 {
                                    grid-area: 102/2/114/10;
                                    z-index: 19;
                                    @media (max-width: 767px) {
                                    }
                                    }
                                    .fe-block-yui_3_17_2_1_1713753864462_34357 .sqs-block {
                                    justify-content: flex-start;
                                    }
                                    .fe-block-yui_3_17_2_1_1713753864462_34357 .sqs-block-alignment-wrapper {
                                    align-items: flex-start;
                                    }
                                    @media (min-width: 768px) {
                                    .fe-block-yui_3_17_2_1_1713753864462_34357 {
                                    grid-area: 31/3/41/10;
                                    z-index: 19;
                                    }
                                    .fe-block-yui_3_17_2_1_1713753864462_34357 .sqs-block {
                                    justify-content: flex-start;
                                    }
                                    .fe-block-yui_3_17_2_1_1713753864462_34357 .sqs-block-alignment-wrapper {
                                    align-items: flex-start;
                                    }
                                    }
                                    .fe-block-yui_3_17_2_1_1713753864462_33602 {
                                    grid-area: 115/2/129/10;
                                    z-index: 18;
                                    @media (max-width: 767px) {
                                    }
                                    }
                                    .fe-block-yui_3_17_2_1_1713753864462_33602 .sqs-block {
                                    justify-content: flex-start;
                                    }
                                    .fe-block-yui_3_17_2_1_1713753864462_33602 .sqs-block-alignment-wrapper {
                                    align-items: flex-start;
                                    }
                                    @media (min-width: 768px) {
                                    .fe-block-yui_3_17_2_1_1713753864462_33602 {
                                    grid-area: 42/3/51/11;
                                    z-index: 18;
                                    }
                                    .fe-block-yui_3_17_2_1_1713753864462_33602 .sqs-block {
                                    justify-content: flex-start;
                                    }
                                    .fe-block-yui_3_17_2_1_1713753864462_33602 .sqs-block-alignment-wrapper {
                                    align-items: flex-start;
                                    }
                                    }
                                    .fe-block-b7381464f3a3195b242a {
                                    grid-area: 129/2/135/9;
                                    z-index: 2;
                                    @media (max-width: 767px) {
                                    }
                                    }
                                    .fe-block-b7381464f3a3195b242a .sqs-block {
                                    justify-content: center;
                                    }
                                    .fe-block-b7381464f3a3195b242a .sqs-block-alignment-wrapper {
                                    align-items: center;
                                    }
                                    @media (min-width: 768px) {
                                    .fe-block-b7381464f3a3195b242a {
                                    grid-area: 50/5/53/9;
                                    z-index: 2;
                                    }
                                    .fe-block-b7381464f3a3195b242a .sqs-block {
                                    justify-content: center;
                                    }
                                    .fe-block-b7381464f3a3195b242a .sqs-block-alignment-wrapper {
                                    align-items: center;
                                    }
                                    }
                                    .fe-block-f4fc2e2d7038756bc311 {
                                    grid-area: 135/4/141/8;
                                    z-index: 3;
                                    @media (max-width: 767px) {
                                    }
                                    }
                                    .fe-block-f4fc2e2d7038756bc311 .sqs-block {
                                    justify-content: center;
                                    }
                                    .fe-block-f4fc2e2d7038756bc311 .sqs-block-alignment-wrapper {
                                    align-items: center;
                                    }
                                    @media (min-width: 768px) {
                                    .fe-block-f4fc2e2d7038756bc311 {
                                    grid-area: 50/3/53/5;
                                    z-index: 3;
                                    }
                                    .fe-block-f4fc2e2d7038756bc311 .sqs-block {
                                    justify-content: center;
                                    }
                                    .fe-block-f4fc2e2d7038756bc311 .sqs-block-alignment-wrapper {
                                    align-items: center;
                                    }
                                    }
                                    .fe-block-yui_3_17_2_1_1708903619159_13681 {
                                    grid-area: 144/2/146/10;
                                    z-index: 15;
                                    @media (max-width: 767px) {
                                    }
                                    }
                                    .fe-block-yui_3_17_2_1_1708903619159_13681 .sqs-block {
                                    justify-content: flex-start;
                                    }
                                    .fe-block-yui_3_17_2_1_1708903619159_13681 .sqs-block-alignment-wrapper {
                                    align-items: flex-start;
                                    }
                                    @media (min-width: 768px) {
                                    .fe-block-yui_3_17_2_1_1708903619159_13681 {
                                    grid-area: 54/3/55/8;
                                    z-index: 15;
                                    }
                                    .fe-block-yui_3_17_2_1_1708903619159_13681 .sqs-block {
                                    justify-content: flex-start;
                                    }
                                    .fe-block-yui_3_17_2_1_1708903619159_13681 .sqs-block-alignment-wrapper {
                                    align-items: flex-start;
                                    }
                                    }
                        </style>
                        <div class="fluid-engine fe-6593abc53b38c97cdaf5a35d" id="yui_3_17_2_1_1730408054336_73">
                            <div class="fe-block fe-block-1acad85a90557589a360" style="mix-blend-mode: normal;">
                            <div class="sqs-block html-block sqs-block-html" data-blend-mode="NORMAL" data-block-type="2" data-border-radii="{&quot;topLeft&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;topRight&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;bottomLeft&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;bottomRight&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0}}" id="block-1acad85a90557589a360">
                                <div class="sqs-block-content">
                                <div class="sqs-html-content">
                                    <h3 style="text-align:center;white-space:pre-wrap;"><span class="sqsrte-text-color--custom" style="color: #584910">Need more help?</span></h3>
                                    <h4 style="text-align:center;white-space:pre-wrap;">Our team is here to support you!</h4>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div class="fe-block fe-block-81e9c99cb8f387900f52">
                            <div class="sqs-block button-block sqs-block-button sqs-stretched" data-block-type="53" id="block-81e9c99cb8f387900f52">
                                <div class="sqs-block-content" id="yui_3_17_2_1_1730408054336_121">
                                <div class="sqs-block-button-container sqs-block-button-container--center" data-animation-role="button" data-alignment="center" data-button-size="medium" data-button-type="primary" id="yui_3_17_2_1_1730408054336_120">
                                    <a href="https://calendly.com/naghedi-booking/interview" class="sqs-block-button-element--medium sqs-button-element--primary sqs-block-button-element" target="_blank" data-initialized="true">
                                    Book Appointment
                                    </a>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div class="fe-block fe-block-7cbd4ecd4562c6d8b667">
                            <div class="sqs-block button-block sqs-block-button sqs-stretched" data-block-type="53" id="block-7cbd4ecd4562c6d8b667">
                                <div class="sqs-block-content" id="yui_3_17_2_1_1730408054336_128">
                                <div class="sqs-block-button-container sqs-block-button-container--center" data-animation-role="button" data-alignment="center" data-button-size="medium" data-button-type="primary" id="yui_3_17_2_1_1730408054336_127">
                                    <a href="https://secure.officio.ca/qnr?id=4902&amp;hash=d83cf1baabcbb257f7f99f624ba3b2f0" class="sqs-block-button-element--medium sqs-button-element--primary sqs-block-button-element" target="_blank" data-initialized="true">
                                    Free Assessment Form
                                    </a>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div class="fe-block fe-block-yui_3_17_2_1_1713753864462_79768" style="mix-blend-mode: normal;">
                            <div class="sqs-block html-block sqs-block-html" data-blend-mode="NORMAL" data-block-type="2" data-border-radii="{&quot;topLeft&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;topRight&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;bottomLeft&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;bottomRight&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0}}" id="block-yui_3_17_2_1_1713753864462_79768">
                                <div class="sqs-block-content">
                                <div class="sqs-html-content">
                                    <p class="sqsrte-large" style="white-space:pre-wrap;"><strong><em>Your Immigration Journey Is Unique,</em></strong></p>
                                    <p class="sqsrte-large" style="white-space:pre-wrap;"><strong><em>So Is Our Approach.</em></strong></p>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div class="fe-block fe-block-yui_3_17_2_1_1713753864462_81440" id="yui_3_17_2_1_1730408054336_72">
                            <div class="sqs-block image-block sqs-block-image sqs-stretched sqs-text-ready" data-block-type="5" id="block-yui_3_17_2_1_1713753864462_81440">
                                <div class="sqs-block-content" id="yui_3_17_2_1_1730408054336_71" style="height: 100%; width: 100%;">
                                <div class="image-block-outer-wrapper layout-caption-below design-layout-fluid image-position-center combination-animation-site-default individual-animation-site-default sqs-narrow-width" data-test="image-block-fluid-outer-wrapper" id="yui_3_17_2_1_1730408054336_70">
                                    <div class="fluid-image-animation-wrapper sqs-image sqs-block-alignment-wrapper" data-animation-role="image" id="yui_3_17_2_1_1730408054336_69">
                                    <div class="fluid-image-container sqs-image-content" style="overflow: hidden; mask-image: -webkit-radial-gradient(center, white, black); position: relative; width: 100%; height: 104.037px;" id="yui_3_17_2_1_1730408054336_68">
                                        <div class="content-fit" id="yui_3_17_2_1_1730408054336_67">
                                        <img data-stretch="false" data-src="./index_files/YESNOARTBOARD.png" data-image="./index_files/YESNOARTBOARD.png" data-image-dimensions="1853x595" data-image-focal-point="0.5,0.5" alt="" data-load="false" elementtiming="system-image-block" src="./index_files/YESNOARTBOARD(1).png" width="1853" height="595" sizes="(max-width: 640px) 100vw, (max-width: 767px) 100vw, 20.833333333333336vw" style="display:block;object-fit: contain; object-position: 50% 50%" srcset="./index_files/YESNOARTBOARD.png?format=100w 100w, ./index_files/YESNOARTBOARD.png?format=300w 300w, ./index_files/YESNOARTBOARD.png?format=500w 500w, ./index_files/YESNOARTBOARD.png?format=750w 750w, ./index_files/YESNOARTBOARD.png?format=1000w 1000w, ./index_files/YESNOARTBOARD.png?format=1500w 1500w, ./index_files/YESNOARTBOARD.png?format=2500w 2500w" loading="lazy" decoding="async" data-loader="sqs">
                                        <div class="fluidImageOverlay"></div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <style>
                                    .sqs-block-image .sqs-block-content {
                                                height: 100%;
                                                width: 100%;
                                                }
                                                .fe-block-yui_3_17_2_1_1713753864462_81440 .fluidImageOverlay {
                                                position: absolute;
                                                top: 0;
                                                left: 0;
                                                width: 100%;
                                                height: 100%;
                                                mix-blend-mode: normal;
                                                opacity: 0;
                                                }
                                </style>
                                </div>
                            </div>
                            </div>
                            <div class="fe-block fe-block-yui_3_17_2_1_1713753864462_67627" style="mix-blend-mode: normal;">
                            <div class="sqs-block html-block sqs-block-html" data-blend-mode="NORMAL" data-block-type="2" data-border-radii="{&quot;topLeft&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;topRight&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;bottomLeft&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;bottomRight&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0}}" id="block-yui_3_17_2_1_1713753864462_67627">
                                <div class="sqs-block-content">
                                <div class="sqs-html-content">
                                    <h4 style="white-space:pre-wrap;"><strong>Have a Question?</strong></h4>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div class="fe-block fe-block-yui_3_17_2_1_1713753864462_65458" style="mix-blend-mode: normal;">
                            <div class="sqs-block html-block sqs-block-html" data-blend-mode="NORMAL" data-block-type="2" data-border-radii="{&quot;topLeft&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;topRight&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;bottomLeft&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;bottomRight&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0}}" id="block-yui_3_17_2_1_1713753864462_65458">
                                <div class="sqs-block-content">
                                <div class="sqs-html-content">
                                    <p class="" style="white-space:pre-wrap;">Leave us a message. We will get in touch with you shortly!</p>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div class="fe-block fe-block-yui_3_17_2_1_1713753864462_64300" style="mix-blend-mode: normal;">
                            <div class="sqs-block form-block sqs-block-form" data-blend-mode="NORMAL" data-block-type="9" data-border-radii="{&quot;topLeft&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;topRight&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;bottomLeft&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;bottomRight&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0}}" id="block-yui_3_17_2_1_1713753864462_64300">
                                <div class="sqs-block-content">
                                <script type="application/json" id="form-context-6627101231bd0a3c2bced0ab" class="sqs-form-block-context">{"secureUrl":"https://turtle-salmon-8r6h.squarespace.com","formSubmitButtonText":"Submit","formSubmissionMessage":{"html":"<p class=\"\" style=\"white-space:pre-wrap;\">Thank you for your note. We will get in touch soon!</p>"},"submissionVerticalAlignment":"","buttonAlignment":"left","submissionMessageTextStyle":"","formName":"Home (Copy) Form","collectionId":"662531d7f802165d72928543","submissionAnimation":"","captchaTheme":1,"formId":"6627101231bd0a3c2bced0ab","useLightbox":false,"firstFieldHighlightType":"","useFormsJs":true,"submissionTextAlignment":"","formFieldFormats":{"countries":[{"name":"Afghanistan","code":"AF","phoneCode":"+93"},{"name":"Åland Islands","code":"AX","phoneCode":"+358"},{"name":"Albania","code":"AL","phoneCode":"+355"},{"name":"Algeria","code":"DZ","phoneCode":"+213"},{"name":"American Samoa","code":"AS","phoneCode":"+1"},{"name":"Andorra","code":"AD","phoneCode":"+376"},{"name":"Angola","code":"AO","phoneCode":"+244"},{"name":"Anguilla","code":"AI","phoneCode":"+1"},{"name":"Antigua & Barbuda","code":"AG","phoneCode":"+1"},{"name":"Argentina","code":"AR","phoneCode":"+54"},{"name":"Armenia","code":"AM","phoneCode":"+374"},{"name":"Aruba","code":"AW","phoneCode":"+297"},{"name":"Ascension Island","code":"AC","phoneCode":"+247"},{"name":"Australia","code":"AU","phoneCode":"+61"},{"name":"Austria","code":"AT","phoneCode":"+43"},{"name":"Azerbaijan","code":"AZ","phoneCode":"+994"},{"name":"Bahamas","code":"BS","phoneCode":"+1"},{"name":"Bahrain","code":"BH","phoneCode":"+973"},{"name":"Bangladesh","code":"BD","phoneCode":"+880"},{"name":"Barbados","code":"BB","phoneCode":"+1"},{"name":"Belarus","code":"BY","phoneCode":"+375"},{"name":"Belgium","code":"BE","phoneCode":"+32"},{"name":"Belize","code":"BZ","phoneCode":"+501"},{"name":"Benin","code":"BJ","phoneCode":"+229"},{"name":"Bermuda","code":"BM","phoneCode":"+1"},{"name":"Bhutan","code":"BT","phoneCode":"+975"},{"name":"Bolivia","code":"BO","phoneCode":"+591"},{"name":"Bosnia & Herzegovina","code":"BA","phoneCode":"+387"},{"name":"Botswana","code":"BW","phoneCode":"+267"},{"name":"Brazil","code":"BR","phoneCode":"+55"},{"name":"British Indian Ocean Territory","code":"IO","phoneCode":"+246"},{"name":"British Virgin Islands","code":"VG","phoneCode":"+1"},{"name":"Brunei","code":"BN","phoneCode":"+673"},{"name":"Bulgaria","code":"BG","phoneCode":"+359"},{"name":"Burkina Faso","code":"BF","phoneCode":"+226"},{"name":"Burundi","code":"BI","phoneCode":"+257"},{"name":"Cambodia","code":"KH","phoneCode":"+855"},{"name":"Cameroon","code":"CM","phoneCode":"+237"},{"name":"Canada","code":"CA","phoneCode":"+1"},{"name":"Cape Verde","code":"CV","phoneCode":"+238"},{"name":"Caribbean Netherlands","code":"BQ","phoneCode":"+599"},{"name":"Cayman Islands","code":"KY","phoneCode":"+1"},{"name":"Central African Republic","code":"CF","phoneCode":"+236"},{"name":"Chad","code":"TD","phoneCode":"+235"},{"name":"Chile","code":"CL","phoneCode":"+56"},{"name":"China","code":"CN","phoneCode":"+86"},{"name":"Christmas Island","code":"CX","phoneCode":"+61"},{"name":"Cocos (Keeling) Islands","code":"CC","phoneCode":"+61"},{"name":"Colombia","code":"CO","phoneCode":"+57"},{"name":"Comoros","code":"KM","phoneCode":"+269"},{"name":"Congo - Brazzaville","code":"CG","phoneCode":"+242"},{"name":"Congo - Kinshasa","code":"CD","phoneCode":"+243"},{"name":"Cook Islands","code":"CK","phoneCode":"+682"},{"name":"Costa Rica","code":"CR","phoneCode":"+506"},{"name":"Côte d’Ivoire","code":"CI","phoneCode":"+225"},{"name":"Croatia","code":"HR","phoneCode":"+385"},{"name":"Cuba","code":"CU","phoneCode":"+53"},{"name":"Curaçao","code":"CW","phoneCode":"+599"},{"name":"Cyprus","code":"CY","phoneCode":"+357"},{"name":"Czechia","code":"CZ","phoneCode":"+420"},{"name":"Denmark","code":"DK","phoneCode":"+45"},{"name":"Djibouti","code":"DJ","phoneCode":"+253"},{"name":"Dominica","code":"DM","phoneCode":"+1"},{"name":"Dominican Republic","code":"DO","phoneCode":"+1"},{"name":"Ecuador","code":"EC","phoneCode":"+593"},{"name":"Egypt","code":"EG","phoneCode":"+20"},{"name":"El Salvador","code":"SV","phoneCode":"+503"},{"name":"Equatorial Guinea","code":"GQ","phoneCode":"+240"},{"name":"Eritrea","code":"ER","phoneCode":"+291"},{"name":"Estonia","code":"EE","phoneCode":"+372"},{"name":"Eswatini","code":"SZ","phoneCode":"+268"},{"name":"Ethiopia","code":"ET","phoneCode":"+251"},{"name":"Falkland Islands","code":"FK","phoneCode":"+500"},{"name":"Faroe Islands","code":"FO","phoneCode":"+298"},{"name":"Fiji","code":"FJ","phoneCode":"+679"},{"name":"Finland","code":"FI","phoneCode":"+358"},{"name":"France","code":"FR","phoneCode":"+33"},{"name":"French Guiana","code":"GF","phoneCode":"+594"},{"name":"French Polynesia","code":"PF","phoneCode":"+689"},{"name":"Gabon","code":"GA","phoneCode":"+241"},{"name":"Gambia","code":"GM","phoneCode":"+220"},{"name":"Georgia","code":"GE","phoneCode":"+995"},{"name":"Germany","code":"DE","phoneCode":"+49"},{"name":"Ghana","code":"GH","phoneCode":"+233"},{"name":"Gibraltar","code":"GI","phoneCode":"+350"},{"name":"Greece","code":"GR","phoneCode":"+30"},{"name":"Greenland","code":"GL","phoneCode":"+299"},{"name":"Grenada","code":"GD","phoneCode":"+1"},{"name":"Guadeloupe","code":"GP","phoneCode":"+590"},{"name":"Guam","code":"GU","phoneCode":"+1"},{"name":"Guatemala","code":"GT","phoneCode":"+502"},{"name":"Guernsey","code":"GG","phoneCode":"+44"},{"name":"Guinea","code":"GN","phoneCode":"+224"},{"name":"Guinea-Bissau","code":"GW","phoneCode":"+245"},{"name":"Guyana","code":"GY","phoneCode":"+592"},{"name":"Haiti","code":"HT","phoneCode":"+509"},{"name":"Honduras","code":"HN","phoneCode":"+504"},{"name":"Hong Kong SAR China","code":"HK","phoneCode":"+852"},{"name":"Hungary","code":"HU","phoneCode":"+36"},{"name":"Iceland","code":"IS","phoneCode":"+354"},{"name":"India","code":"IN","phoneCode":"+91"},{"name":"Indonesia","code":"ID","phoneCode":"+62"},{"name":"Iran","code":"IR","phoneCode":"+98"},{"name":"Iraq","code":"IQ","phoneCode":"+964"},{"name":"Ireland","code":"IE","phoneCode":"+353"},{"name":"Isle of Man","code":"IM","phoneCode":"+44"},{"name":"Israel","code":"IL","phoneCode":"+972"},{"name":"Italy","code":"IT","phoneCode":"+39"},{"name":"Jamaica","code":"JM","phoneCode":"+1"},{"name":"Japan","code":"JP","phoneCode":"+81"},{"name":"Jersey","code":"JE","phoneCode":"+44"},{"name":"Jordan","code":"JO","phoneCode":"+962"},{"name":"Kazakhstan","code":"KZ","phoneCode":"+7"},{"name":"Kenya","code":"KE","phoneCode":"+254"},{"name":"Kiribati","code":"KI","phoneCode":"+686"},{"name":"Kosovo","code":"XK","phoneCode":"+383"},{"name":"Kuwait","code":"KW","phoneCode":"+965"},{"name":"Kyrgyzstan","code":"KG","phoneCode":"+996"},{"name":"Laos","code":"LA","phoneCode":"+856"},{"name":"Latvia","code":"LV","phoneCode":"+371"},{"name":"Lebanon","code":"LB","phoneCode":"+961"},{"name":"Lesotho","code":"LS","phoneCode":"+266"},{"name":"Liberia","code":"LR","phoneCode":"+231"},{"name":"Libya","code":"LY","phoneCode":"+218"},{"name":"Liechtenstein","code":"LI","phoneCode":"+423"},{"name":"Lithuania","code":"LT","phoneCode":"+370"},{"name":"Luxembourg","code":"LU","phoneCode":"+352"},{"name":"Macao SAR China","code":"MO","phoneCode":"+853"},{"name":"Madagascar","code":"MG","phoneCode":"+261"},{"name":"Malawi","code":"MW","phoneCode":"+265"},{"name":"Malaysia","code":"MY","phoneCode":"+60"},{"name":"Maldives","code":"MV","phoneCode":"+960"},{"name":"Mali","code":"ML","phoneCode":"+223"},{"name":"Malta","code":"MT","phoneCode":"+356"},{"name":"Marshall Islands","code":"MH","phoneCode":"+692"},{"name":"Martinique","code":"MQ","phoneCode":"+596"},{"name":"Mauritania","code":"MR","phoneCode":"+222"},{"name":"Mauritius","code":"MU","phoneCode":"+230"},{"name":"Mayotte","code":"YT","phoneCode":"+262"},{"name":"Mexico","code":"MX","phoneCode":"+52"},{"name":"Micronesia","code":"FM","phoneCode":"+691"},{"name":"Moldova","code":"MD","phoneCode":"+373"},{"name":"Monaco","code":"MC","phoneCode":"+377"},{"name":"Mongolia","code":"MN","phoneCode":"+976"},{"name":"Montenegro","code":"ME","phoneCode":"+382"},{"name":"Montserrat","code":"MS","phoneCode":"+1"},{"name":"Morocco","code":"MA","phoneCode":"+212"},{"name":"Mozambique","code":"MZ","phoneCode":"+258"},{"name":"Myanmar (Burma)","code":"MM","phoneCode":"+95"},{"name":"Namibia","code":"NA","phoneCode":"+264"},{"name":"Nauru","code":"NR","phoneCode":"+674"},{"name":"Nepal","code":"NP","phoneCode":"+977"},{"name":"Netherlands","code":"NL","phoneCode":"+31"},{"name":"New Caledonia","code":"NC","phoneCode":"+687"},{"name":"New Zealand","code":"NZ","phoneCode":"+64"},{"name":"Nicaragua","code":"NI","phoneCode":"+505"},{"name":"Niger","code":"NE","phoneCode":"+227"},{"name":"Nigeria","code":"NG","phoneCode":"+234"},{"name":"Niue","code":"NU","phoneCode":"+683"},{"name":"Norfolk Island","code":"NF","phoneCode":"+672"},{"name":"Northern Mariana Islands","code":"MP","phoneCode":"+1"},{"name":"North Korea","code":"KP","phoneCode":"+850"},{"name":"North Macedonia","code":"MK","phoneCode":"+389"},{"name":"Norway","code":"NO","phoneCode":"+47"},{"name":"Oman","code":"OM","phoneCode":"+968"},{"name":"Pakistan","code":"PK","phoneCode":"+92"},{"name":"Palau","code":"PW","phoneCode":"+680"},{"name":"Palestinian Territories","code":"PS","phoneCode":"+970"},{"name":"Panama","code":"PA","phoneCode":"+507"},{"name":"Papua New Guinea","code":"PG","phoneCode":"+675"},{"name":"Paraguay","code":"PY","phoneCode":"+595"},{"name":"Peru","code":"PE","phoneCode":"+51"},{"name":"Philippines","code":"PH","phoneCode":"+63"},{"name":"Poland","code":"PL","phoneCode":"+48"},{"name":"Portugal","code":"PT","phoneCode":"+351"},{"name":"Puerto Rico","code":"PR","phoneCode":"+1"},{"name":"Qatar","code":"QA","phoneCode":"+974"},{"name":"Réunion","code":"RE","phoneCode":"+262"},{"name":"Romania","code":"RO","phoneCode":"+40"},{"name":"Russia","code":"RU","phoneCode":"+7"},{"name":"Rwanda","code":"RW","phoneCode":"+250"},{"name":"Samoa","code":"WS","phoneCode":"+685"},{"name":"San Marino","code":"SM","phoneCode":"+378"},{"name":"São Tomé & Príncipe","code":"ST","phoneCode":"+239"},{"name":"Saudi Arabia","code":"SA","phoneCode":"+966"},{"name":"Senegal","code":"SN","phoneCode":"+221"},{"name":"Serbia","code":"RS","phoneCode":"+381"},{"name":"Seychelles","code":"SC","phoneCode":"+248"},{"name":"Sierra Leone","code":"SL","phoneCode":"+232"},{"name":"Singapore","code":"SG","phoneCode":"+65"},{"name":"Sint Maarten","code":"SX","phoneCode":"+1"},{"name":"Slovakia","code":"SK","phoneCode":"+421"},{"name":"Slovenia","code":"SI","phoneCode":"+386"},{"name":"Solomon Islands","code":"SB","phoneCode":"+677"},{"name":"Somalia","code":"SO","phoneCode":"+252"},{"name":"South Africa","code":"ZA","phoneCode":"+27"},{"name":"South Korea","code":"KR","phoneCode":"+82"},{"name":"South Sudan","code":"SS","phoneCode":"+211"},{"name":"Spain","code":"ES","phoneCode":"+34"},{"name":"Sri Lanka","code":"LK","phoneCode":"+94"},{"name":"St. Barthélemy","code":"BL","phoneCode":"+590"},{"name":"St. Helena","code":"SH","phoneCode":"+290"},{"name":"St. Kitts & Nevis","code":"KN","phoneCode":"+1"},{"name":"St. Lucia","code":"LC","phoneCode":"+1"},{"name":"St. Martin","code":"MF","phoneCode":"+590"},{"name":"St. Pierre & Miquelon","code":"PM","phoneCode":"+508"},{"name":"St. Vincent & Grenadines","code":"VC","phoneCode":"+1"},{"name":"Sudan","code":"SD","phoneCode":"+249"},{"name":"Suriname","code":"SR","phoneCode":"+597"},{"name":"Svalbard & Jan Mayen","code":"SJ","phoneCode":"+47"},{"name":"Sweden","code":"SE","phoneCode":"+46"},{"name":"Switzerland","code":"CH","phoneCode":"+41"},{"name":"Syria","code":"SY","phoneCode":"+963"},{"name":"Taiwan","code":"TW","phoneCode":"+886"},{"name":"Tajikistan","code":"TJ","phoneCode":"+992"},{"name":"Tanzania","code":"TZ","phoneCode":"+255"},{"name":"Thailand","code":"TH","phoneCode":"+66"},{"name":"Timor-Leste","code":"TL","phoneCode":"+670"},{"name":"Togo","code":"TG","phoneCode":"+228"},{"name":"Tokelau","code":"TK","phoneCode":"+690"},{"name":"Tonga","code":"TO","phoneCode":"+676"},{"name":"Trinidad & Tobago","code":"TT","phoneCode":"+1"},{"name":"Tristan da Cunha","code":"TA","phoneCode":"+290"},{"name":"Tunisia","code":"TN","phoneCode":"+216"},{"name":"Turkey","code":"TR","phoneCode":"+90"},{"name":"Turkmenistan","code":"TM","phoneCode":"+993"},{"name":"Turks & Caicos Islands","code":"TC","phoneCode":"+1"},{"name":"Tuvalu","code":"TV","phoneCode":"+688"},{"name":"U.S. Virgin Islands","code":"VI","phoneCode":"+1"},{"name":"Uganda","code":"UG","phoneCode":"+256"},{"name":"Ukraine","code":"UA","phoneCode":"+380"},{"name":"United Arab Emirates","code":"AE","phoneCode":"+971"},{"name":"United Kingdom","code":"GB","phoneCode":"+44"},{"name":"United States","code":"US","phoneCode":"+1"},{"name":"Uruguay","code":"UY","phoneCode":"+598"},{"name":"Uzbekistan","code":"UZ","phoneCode":"+998"},{"name":"Vanuatu","code":"VU","phoneCode":"+678"},{"name":"Vatican City","code":"VA","phoneCode":"+39"},{"name":"Venezuela","code":"VE","phoneCode":"+58"},{"name":"Vietnam","code":"VN","phoneCode":"+84"},{"name":"Wallis & Futuna","code":"WF","phoneCode":"+681"},{"name":"Western Sahara","code":"EH","phoneCode":"+212"},{"name":"Yemen","code":"YE","phoneCode":"+967"},{"name":"Zambia","code":"ZM","phoneCode":"+260"},{"name":"Zimbabwe","code":"ZW","phoneCode":"+263"}],"initialPhoneFormat":{"id":0,"type":"PHONE_NUMBER","country":"CA","labelLocale":"en-US","fields":[{"type":"SEPARATOR","label":"(","identifier":"LeftParen","length":0,"required":false,"metadata":{}},{"type":"FIELD","label":"1","identifier":"1","length":3,"required":false,"metadata":{}},{"type":"SEPARATOR","label":")","identifier":"RightParen","length":0,"required":false,"metadata":{}},{"type":"SEPARATOR","label":" ","identifier":"Space","length":0,"required":false,"metadata":{}},{"type":"FIELD","label":"2","identifier":"2","length":3,"required":false,"metadata":{}},{"type":"SEPARATOR","label":"-","identifier":"Dash","length":0,"required":false,"metadata":{}},{"type":"FIELD","label":"3","identifier":"3","length":14,"required":false,"metadata":{}}]},"initialNameOrder":"GIVEN_FIRST","initialAddressFormat":{"id":0,"type":"ADDRESS","country":"CA","labelLocale":"en","fields":[{"type":"FIELD","label":"Address Line 1","identifier":"Line1","length":0,"required":true,"metadata":{"autocomplete":"address-line1"}},{"type":"SEPARATOR","label":"\n","identifier":"Newline","length":0,"required":false,"metadata":{}},{"type":"FIELD","label":"Address Line 2","identifier":"Line2","length":0,"required":false,"metadata":{"autocomplete":"address-line2"}},{"type":"SEPARATOR","label":"\n","identifier":"Newline","length":0,"required":false,"metadata":{}},{"type":"FIELD","label":"City","identifier":"City","length":0,"required":true,"metadata":{"autocomplete":"address-level2"}},{"type":"SEPARATOR","label":" ","identifier":"Space","length":0,"required":false,"metadata":{}},{"type":"FIELD","label":"Province","identifier":"State","length":0,"required":true,"metadata":{"autocomplete":"address-level1"}},{"type":"SEPARATOR","label":" ","identifier":"Space","length":0,"required":false,"metadata":{}},{"type":"FIELD","label":"Postal Code","identifier":"Zip","length":0,"required":true,"metadata":{"autocomplete":"postal-code"}}]}},"showTitle":false,"captchaEnabled":true,"buttonVariant":"","objectName":"yui_3_17_2_1_1713753864462_64300","disclaimerMessage":{"html":""},"formFields":[{"type":"name","id":"name-yui_3_17_2_1_1713833105443_5966","locked":false,"title":"Name","description":"","required":true,"name":true},{"type":"email","id":"email-yui_3_17_2_1_1713835796922_10316","locked":false,"title":"Email","description":"","placeholder":"","required":true,"email":true,"mailingList":true},{"type":"text","id":"text-yui_3_17_2_1_1713835796922_10317","locked":false,"title":"Subject","description":"","placeholder":"","required":true,"text":true},{"type":"textarea","id":"textarea-yui_3_17_2_1_1713835796922_10318","locked":false,"title":"Message","description":"","placeholder":"","required":true,"textarea":true,"maxLength":""}],"captchaAlignment":1,"lightboxHandleText":"","localizedStrings":{"validation":{"noValidSelection":"A valid selection must be made.","invalidUrl":"Must be a valid URL.","stringTooLong":"Value should have a length no longer than {0}.","containsInvalidKey":"{0} contains an invalid key.","invalidTwitterUsername":"Must be a valid Twitter username.","valueOutsideRange":"Value must be in the range {0} to {1}.","invalidPassword":"Passwords should not contain whitespace.","missingRequiredSubfields":"{0} is missing required subfields: {1}","invalidCurrency":"Currency value should be formatted like 1234 or 123.99.","invalidMapSize":"Value should contain exactly {0} elements.","subfieldsRequired":"All fields in {0} are required.","formSubmissionFailed":"Form submission failed. Review the following information: {0}.","invalidCountryCode":"Country code should have an optional plus and up to 4 digits.","invalidDate":"This is not a real date.","required":"{0} is required.","invalidStringLength":"Value should be {0} characters long.","invalidEmail":"Email addresses should follow the format user@domain.com.","invalidListLength":"Value should be {0} elements long.","allEmpty":"Please fill out at least one form field.","missingRequiredQuestion":"Missing a required question.","invalidQuestion":"Contained an invalid question.","captchaFailure":"Captcha validation failed. Please try again.","stringTooShort":"Value should have a length of at least {0}.","invalid":"{0} is not valid.","formErrors":"Form Errors","containsInvalidValue":"{0} contains an invalid value.","invalidUnsignedNumber":"Numbers must contain only digits and no other characters.","invalidName":"Valid names contain only letters, numbers, spaces, ', or - characters."},"submit":"Submit","status":{"title":"{@} Block","learnMore":"Learn more"},"name":{"firstName":"First Name","lastName":"Last Name"},"lightbox":{"openForm":"Open Form"},"likert":{"agree":"Agree","stronglyDisagree":"Strongly Disagree","disagree":"Disagree","stronglyAgree":"Strongly Agree","neutral":"Neutral"},"time":{"am":"AM","second":"Second","pm":"PM","minute":"Minute","amPm":"AM/PM","hour":"Hour"},"notFound":"Form not found.","date":{"yyyy":"YYYY","year":"Year","mm":"MM","day":"Day","month":"Month","dd":"DD"},"phone":{"country":"Country","number":"Number","prefix":"Prefix","areaCode":"Area Code","line":"Line"},"submitError":"Unable to submit form. Please try again later.","address":{"stateProvince":"State/Province","country":"Country","zipPostalCode":"Zip/Postal Code","address2":"Address 2","address1":"Address 1","city":"City"},"email":{"signUp":"Sign up for news and updates"},"cannotSubmitDemoForm":"This is a demo form and cannot be submitted.","required":"(required)","invalidData":"Invalid form data."}}</script>
                                <div id="form-submission-html-6627101231bd0a3c2bced0ab" class="sqs-form-block-submission-html" data-submission-html=""></div>
                                <div class="form-wrapper">
                                    <form autocomplete="on" class="react-form-contents" novalidate="">
                                    <div tabindex="-1"></div>
                                    <div class="field-list">
                                        <fieldset class="form-item fields QtxqgZo50mL9VQ8qPer8 name" id="name-yui_3_17_2_1_1713833105443_5966">
                                        <legend id="name-yui_3_17_2_1_1713833105443_5966-field-wrapper">
                                            <div class="title">
                                            <div class="Wo7pExQSrVyJJx2_TtqB"><span>Name</span><span class="description required">(required)</span></div>
                                            </div>
                                        </legend>
                                        <div class="field first-name" data-dynamic-strings="">
                                            <label class="k3TDjbWcYCnxX9eAZxaG caption" for="name-yui_3_17_2_1_1713833105443_5966-fname-field">
                                            <div class="pKNLq50xgvWPp5KofFuv">
                                                <div class="caption-text s4wzV27zR4Bs75cxH1R8">First Name</div>
                                            </div>
                                            </label>
                                            <input aria-invalid="false" aria-required="true" autocomplete="given-name" class="YY8bsUECeaLgDGNn7yjy" id="name-yui_3_17_2_1_1713833105443_5966-fname-field" name="fname" type="text" value=""><span class="_5zPLJNHW2H4qH5jf6CRG form-input-effects" aria-hidden="true"><span class="form-input-effects-border"></span></span>
                                        </div>
                                        <div class="field last-name" data-dynamic-strings="">
                                            <label class="k3TDjbWcYCnxX9eAZxaG caption" for="name-yui_3_17_2_1_1713833105443_5966-lname-field">
                                            <div class="pKNLq50xgvWPp5KofFuv">
                                                <div class="caption-text s4wzV27zR4Bs75cxH1R8">Last Name</div>
                                            </div>
                                            </label>
                                            <input aria-invalid="false" aria-required="true" autocomplete="family-name" class="YY8bsUECeaLgDGNn7yjy" id="name-yui_3_17_2_1_1713833105443_5966-lname-field" name="lname" type="text" value=""><span class="_5zPLJNHW2H4qH5jf6CRG form-input-effects" aria-hidden="true"><span class="form-input-effects-border"></span></span>
                                        </div>
                                        </fieldset>
                                        <div class="form-item field email required" id="email-yui_3_17_2_1_1713835796922_10316" data-dynamic-strings="">
                                        <label for="email-yui_3_17_2_1_1713835796922_10316-field" class="title o8fjTY9cgg5B_tQ6weo2">
                                            <div class="mch_q_ngbXyQ6kkHHR47">
                                            <div class="e7KPEaEtjUBeAxkEnjgx"><span>Email</span><span class="description required">(required)</span></div>
                                            </div>
                                        </label>
                                        <input aria-invalid="false" aria-required="true" autocomplete="email" class="YY8bsUECeaLgDGNn7yjy" id="email-yui_3_17_2_1_1713835796922_10316-field" placeholder="" type="email" value=""><span class="_5zPLJNHW2H4qH5jf6CRG form-input-effects" aria-hidden="true"><span class="form-input-effects-border"></span></span>
                                        <div class="option"><label class="FLjJl_bdARvJMD9PUkfO"><input class="EUIluzKpFrK_IvDeY0o2" name="email-yui_3_17_2_1_1713835796922_10316-field" type="checkbox" value="Sign up for news and updates"><span data-dynamic-strings="true">Sign up for news and updates</span></label></div>
                                        </div>
                                        <div class="form-item field text required" id="text-yui_3_17_2_1_1713835796922_10317" data-dynamic-strings="">
                                        <label for="text-yui_3_17_2_1_1713835796922_10317-field" class="title o8fjTY9cgg5B_tQ6weo2">
                                            <div class="mch_q_ngbXyQ6kkHHR47">
                                            <div class="e7KPEaEtjUBeAxkEnjgx"><span>Subject</span><span class="description required">(required)</span></div>
                                            </div>
                                        </label>
                                        <input aria-invalid="false" aria-required="true" autocomplete="false" class="YY8bsUECeaLgDGNn7yjy" id="text-yui_3_17_2_1_1713835796922_10317-field" placeholder="" type="text" value=""><span class="_5zPLJNHW2H4qH5jf6CRG form-input-effects" aria-hidden="true"><span class="form-input-effects-border"></span></span>
                                        </div>
                                        <div class="form-item field textarea required" id="textarea-yui_3_17_2_1_1713835796922_10318" data-dynamic-strings="">
                                        <label for="textarea-yui_3_17_2_1_1713835796922_10318-field" class="title o8fjTY9cgg5B_tQ6weo2">
                                            <div class="mch_q_ngbXyQ6kkHHR47">
                                            <div class="e7KPEaEtjUBeAxkEnjgx"><span>Message</span><span class="description required">(required)</span></div>
                                            </div>
                                        </label>
                                        <textarea id="textarea-yui_3_17_2_1_1713835796922_10318-field" aria-invalid="false" class="exEY8jcftKUvZ_nFjXsJ" placeholder=""></textarea>
                                        <span class="_5zPLJNHW2H4qH5jf6CRG form-input-effects" aria-hidden="true"><span class="form-input-effects-border"></span></span>
                                        </div>
                                    </div>
                                    <div class="form-button-wrapper form-button-wrapper--align-left"><button type="submit" class="button sqs-system-button sqs-editable-button form-submit-button sqs-button-element--primary none DpezR1yaFLxCg1TANwKp"><span class="form-submit-button-label">Submit</span><span class="dARUh9Ts7pz6IZDb3qQX form-submit-button-state" aria-label="Submit"><span aria-hidden="true">Submit</span><span aria-hidden="true"><span></span></span><span aria-hidden="true"><span></span></span></span></button></div>
                                    </form>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div class="fe-block fe-block-yui_3_17_2_1_1713753864462_21548" style="mix-blend-mode: normal;">
                            <div class="sqs-block html-block sqs-block-html" data-blend-mode="NORMAL" data-block-type="2" data-border-radii="{&quot;topLeft&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;topRight&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;bottomLeft&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;bottomRight&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0}}" id="block-yui_3_17_2_1_1713753864462_21548">
                                <div class="sqs-block-content">
                                <div class="sqs-html-content">
                                    <h4 style="white-space:pre-wrap;"><strong>Useful Links</strong></h4>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div class="fe-block fe-block-yui_3_17_2_1_1713753864462_23233" style="mix-blend-mode: normal;">
                            <div class="sqs-block html-block sqs-block-html" data-blend-mode="NORMAL" data-block-type="2" data-border-radii="{&quot;topLeft&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;topRight&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;bottomLeft&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;bottomRight&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0}}" id="block-yui_3_17_2_1_1713753864462_23233">
                                <div class="sqs-block-content">
                                <div class="sqs-html-content">
                                    <p class="sqsrte-small" style="white-space:pre-wrap;"><a href="https://www.college-ic.ca/" target="_blank">The College of  Immigration and Citizenship Consultants</a></p>
                                    <p class="sqsrte-small" style="white-space:pre-wrap;"><a href="https://register.college-ic.ca/Public-Register-EN/RCIC_Search.aspx" target="_blank">Find an authorized Immigration Consultant</a></p>
                                    <p class="sqsrte-small" style="white-space:pre-wrap;"><a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada.html" target="_blank">IRCC - Immigrate to Canada</a><a href="https://register.college-ic.ca/Public-Register-EN/RCIC_Search.aspx" target="_blank">
                                    </a></p>
                                    <p class="sqsrte-small" style="white-space:pre-wrap;"><a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/provincial-nominees/works.htmll" target="_blank">IRCC - PNP</a></p>
                                    <p class="sqsrte-small" style="white-space:pre-wrap;"><a href="https://www.canada.ca/en/services/immigration-citizenship/helpcentre/glossary.html" target="_blank">IRCC - Glossary</a></p>
                                    <p class="sqsrte-small" style="white-space:pre-wrap;"><a href="https://www.irb-cisr.gc.ca/en/Pages/index.aspx" target="_blank">IRB</a></p>
                                    <p class="sqsrte-small" style="white-space:pre-wrap;"><a href="https://www.cbsa-asfc.gc.ca/menu-eng.html" target="_blank">CBSA</a></p>
                                    <p class="sqsrte-small" style="white-space:pre-wrap;"><a href="https://takeielts.britishcouncil.org/take-ielts/prepare" target="_blank">IELTS - Free resources</a></p>
                                    <p class="sqsrte-small" style="white-space:pre-wrap;"><a href="https://www.celpip.ca/prepare-for-celpip/free-resources/" target="_blank">CELPIP - Free resources</a></p>
                                    <p class="sqsrte-small" style="white-space:pre-wrap;"><a href="https://www.pearsonpte.com/pte-core/preparation" target="_blank">PTE Core - Free resources</a></p>
                                    <p class="sqsrte-small" style="white-space:pre-wrap;"><a href="https://ircc.canada.ca/english/immigrate/skilled/crs-tool.asp" target="_blank">CRS Calculator</a></p>
                                    <p class="sqsrte-small" style="white-space:pre-wrap;"><a href="https://www.jobbank.gc.ca/home" target="_blank">Job Bank</a></p>
                                    <p class="sqsrte-small" style="white-space:pre-wrap;"><a href="https://ircc.canada.ca/english/newcomers/services/index.asp" target="_blank">Newcomer Services</a><a href="http://www.college-ic.ca/" target="_blank">
                                    </a></p>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div class="fe-block fe-block-64e502f25d54a06a9666" style="mix-blend-mode: normal;">
                            <div class="sqs-block html-block sqs-block-html" data-blend-mode="NORMAL" data-block-type="2" data-border-radii="{&quot;topLeft&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;topRight&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;bottomLeft&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;bottomRight&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0}}" id="block-64e502f25d54a06a9666">
                                <div class="sqs-block-content">
                                <div class="sqs-html-content">
                                    <h4 style="white-space:pre-wrap;"><strong>SITE MAP</strong></h4>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div class="fe-block fe-block-b1dedbd730c26b47cca1" style="mix-blend-mode: normal;">
                            <div class="sqs-block html-block sqs-block-html" data-blend-mode="NORMAL" data-block-type="2" data-border-radii="{&quot;topLeft&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;topRight&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;bottomLeft&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;bottomRight&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0}}" id="block-b1dedbd730c26b47cca1">
                                <div class="sqs-block-content">
                                <div class="sqs-html-content">
                                    <h4 style="white-space:pre-wrap;"><strong>FOLLOW</strong></h4>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div class="fe-block fe-block-f36aebc39756237596f9" style="mix-blend-mode: normal;">
                            <div class="sqs-block html-block sqs-block-html" data-blend-mode="NORMAL" data-block-type="2" data-border-radii="{&quot;topLeft&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;topRight&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;bottomLeft&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;bottomRight&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0}}" id="block-f36aebc39756237596f9">
                                <div class="sqs-block-content">
                                <div class="sqs-html-content">
                                    <p class="" style="white-space:pre-wrap;"><a href="./temporary-residence" target="_blank">Temporary Residence</a></p>
                                    <p class="" style="white-space:pre-wrap;"><a href="./permanent-residence" target="_blank">Permanent Residence</a></p>
                                    <p class="" style="white-space:pre-wrap;"><a href="./other" target="_blank">Other</a></p>
                                    <p class="sqsrte-small" style="white-space:pre-wrap;"><a href="./our-team" target="_blank">Our Team</a></p>
                                    <p class="sqsrte-small" style="white-space:pre-wrap;"><a href="https://calendly.com/naghedi-booking/consultation-appointment" target="_blank">Book Appointment</a></p>
                                    <p class="sqsrte-small" style="white-space:pre-wrap;"><a href="https://secure.officio.ca/qnr?id=4902&amp;hash=d83cf1baabcbb257f7f99f624ba3b2f0" target="_blank">Free Assessment Form</a></p>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div class="fe-block fe-block-ec20c1ec639b9b06a264" style="mix-blend-mode: normal;">
                            <div class="sqs-block html-block sqs-block-html" data-blend-mode="NORMAL" data-block-type="2" data-border-radii="{&quot;topLeft&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;topRight&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;bottomLeft&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;bottomRight&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0}}" id="block-ec20c1ec639b9b06a264">
                                <div class="sqs-block-content">
                                <div class="sqs-html-content">
                                    <p class="sqsrte-small" style="white-space:pre-wrap;"><a href="https://www.linkedin.com/company/squarespace/mycompany/verification/" target="">LinkedIn</a></p>
                                    <p class="" style="white-space:pre-wrap;">Facebook</p>
                                    <p class="" style="white-space:pre-wrap;">Instagram</p>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div class="fe-block fe-block-yui_3_17_2_1_1713753864462_34357">
                            <div class="sqs-block map-block sqs-block-map sized vsize-12" data-block-json="{&quot;location&quot;:{&quot;mapLat&quot;:51.04473309999999,&quot;mapLng&quot;:-114.0718831,&quot;mapZoom&quot;:12,&quot;addressTitle&quot;:&quot;Calgary &quot;,&quot;markerLat&quot;:51.04473309999999,&quot;markerLng&quot;:-114.0718831},&quot;vSize&quot;:12,&quot;style&quot;:2,&quot;labels&quot;:true,&quot;terrain&quot;:false,&quot;controls&quot;:false}" data-block-type="4" id="block-yui_3_17_2_1_1713753864462_34357" data-animation-role="image">
                                <div class="sqs-block-content page-map">
                                <div style="height: 100%; width: 100%;">
                                    <div style="overflow: hidden;"></div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div class="fe-block fe-block-yui_3_17_2_1_1713753864462_33602" style="mix-blend-mode: normal;">
                            <div class="sqs-block html-block sqs-block-html" data-blend-mode="NORMAL" data-block-type="2" data-border-radii="{&quot;topLeft&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;topRight&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;bottomLeft&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;bottomRight&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0}}" id="block-yui_3_17_2_1_1713753864462_33602">
                                <div class="sqs-block-content">
                                <div class="sqs-html-content">
                                    <p class="" style="white-space:pre-wrap;">Calgary, Alberta, Canada</p>
                                    <p class="" style="white-space:pre-wrap;">Call us at: : +1 (403)  879 - 7010</p>
                                    <p class="" style="white-space:pre-wrap;">Email us at: hello@naghedi-immigration.ca</p>
                                    <p class="" style="white-space:pre-wrap;">Monday - Friday  9:00 AM to 5:00 PM - Mountain Standard Time (MST)</p>
                                    <p class="" style="white-space:pre-wrap;">We speak English, Persian (Farsi/Dari), German, Arabic, French, Bulgarian</p>
                                    <p class="" style="white-space:pre-wrap;">NAGHEDI Immigration Inc.</p>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div class="fe-block fe-block-b7381464f3a3195b242a" id="yui_3_17_2_1_1730408054336_87">
                            <div class="sqs-block image-block sqs-block-image sqs-stretched sqs-text-ready" data-block-type="5" id="block-b7381464f3a3195b242a">
                                <div class="sqs-block-content" id="yui_3_17_2_1_1730408054336_86" style="height: 100%; width: 100%;">
                                <div class="image-block-outer-wrapper layout-caption-below design-layout-fluid image-position-center combination-animation-site-default individual-animation-site-default sqs-narrow-width" data-test="image-block-fluid-outer-wrapper" id="yui_3_17_2_1_1730408054336_85">
                                    <div class="fluid-image-animation-wrapper sqs-image sqs-block-alignment-wrapper" data-animation-role="image" id="yui_3_17_2_1_1730408054336_84">
                                    <div class="fluid-image-container sqs-image-content" style="overflow: hidden; mask-image: -webkit-radial-gradient(center, white, black); position: relative; width: 100%; height: 99.0064px;" id="yui_3_17_2_1_1730408054336_83">
                                        <div class="content-fit" id="yui_3_17_2_1_1730408054336_82">
                                        <img data-stretch="false" data-src="./index_files/Web+-+College+-+RCIC-IRB_EN_HORZ_CLR_POS.png" data-image="./index_files/Web+-+College+-+RCIC-IRB_EN_HORZ_CLR_POS.png" data-image-dimensions="2650x1013" data-image-focal-point="0.5,0.5" alt="" data-load="false" elementtiming="system-image-block" src="./index_files/Web+-+College+-+RCIC-IRB_EN_HORZ_CLR_POS.png" width="2650" height="1013" sizes="(max-width: 640px) 100vw, (max-width: 767px) 87.5vw, 16.666666666666664vw" style="display:block;object-fit: contain; object-position: 50% 50%" srcset="./index_files/Web+-+College+-+RCIC-IRB_EN_HORZ_CLR_POS.png?format=100w 100w, ./index_files/Web+-+College+-+RCIC-IRB_EN_HORZ_CLR_POS.png?format=300w 300w, ./index_files/Web+-+College+-+RCIC-IRB_EN_HORZ_CLR_POS.png?format=500w 500w, ./index_files/Web+-+College+-+RCIC-IRB_EN_HORZ_CLR_POS.png?format=750w 750w, ./index_files/Web+-+College+-+RCIC-IRB_EN_HORZ_CLR_POS.png?format=1000w 1000w, ./index_files/Web+-+College+-+RCIC-IRB_EN_HORZ_CLR_POS.png?format=1500w 1500w, ./index_files/Web+-+College+-+RCIC-IRB_EN_HORZ_CLR_POS.png?format=2500w 2500w" loading="lazy" decoding="async" data-loader="sqs">
                                        <div class="fluidImageOverlay"></div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <style>
                                    .sqs-block-image .sqs-block-content {
                                                height: 100%;
                                                width: 100%;
                                                }
                                                .fe-block-b7381464f3a3195b242a .fluidImageOverlay {
                                                position: absolute;
                                                top: 0;
                                                left: 0;
                                                width: 100%;
                                                height: 100%;
                                                mix-blend-mode: normal;
                                                opacity: 0;
                                                }
                                </style>
                                </div>
                            </div>
                            </div>
                            <div class="fe-block fe-block-f4fc2e2d7038756bc311" id="yui_3_17_2_1_1730408054336_96">
                            <div class="sqs-block image-block sqs-block-image sqs-stretched sqs-text-ready" data-block-type="5" id="block-f4fc2e2d7038756bc311">
                                <div class="sqs-block-content" id="yui_3_17_2_1_1730408054336_95" style="height: 100%; width: 100%;">
                                <div class="image-block-outer-wrapper layout-caption-below design-layout-fluid image-position-center combination-animation-site-default individual-animation-site-default sqs-narrow-width" data-test="image-block-fluid-outer-wrapper" id="yui_3_17_2_1_1730408054336_94">
                                    <div class="fluid-image-animation-wrapper sqs-image sqs-block-alignment-wrapper" data-animation-role="image" id="yui_3_17_2_1_1730408054336_93">
                                    <div class="fluid-image-container sqs-image-content" style="overflow: hidden; mask-image: -webkit-radial-gradient(center, white, black); position: relative; width: 111.628px; height: 100%;" id="yui_3_17_2_1_1730408054336_92">
                                        <div class="content-fit" id="yui_3_17_2_1_1730408054336_91">
                                        <img data-stretch="false" data-src="./index_files/Official+-+CAPIC-Logo+2-TM+600px.png" data-image="./index_files/Official+-+CAPIC-Logo+2-TM+600px.png" data-image-dimensions="600x559" data-image-focal-point="0.5,0.5" alt="" data-load="false" elementtiming="system-image-block" src="./index_files/Official+-+CAPIC-Logo+2-TM+600px.png" width="600" height="559" sizes="(max-width: 640px) 100vw, (max-width: 767px) 50vw, 8.333333333333332vw" style="display:block;object-fit: contain; object-position: 50% 50%" srcset="./index_files/Official+-+CAPIC-Logo+2-TM+600px.png?format=100w 100w, ./index_files/Official+-+CAPIC-Logo+2-TM+600px.png?format=300w 300w, ./index_files/Official+-+CAPIC-Logo+2-TM+600px.png?format=500w 500w, ./index_files/Official+-+CAPIC-Logo+2-TM+600px.png?format=750w 750w, ./index_files/Official+-+CAPIC-Logo+2-TM+600px.png?format=1000w 1000w, ./index_files/Official+-+CAPIC-Logo+2-TM+600px.png?format=1500w 1500w, ./index_files/Official+-+CAPIC-Logo+2-TM+600px.png?format=2500w 2500w" loading="lazy" decoding="async" data-loader="sqs">
                                        <div class="fluidImageOverlay"></div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <style>
                                    .sqs-block-image .sqs-block-content {
                                                height: 100%;
                                                width: 100%;
                                                }
                                                .fe-block-f4fc2e2d7038756bc311 .fluidImageOverlay {
                                                position: absolute;
                                                top: 0;
                                                left: 0;
                                                width: 100%;
                                                height: 100%;
                                                mix-blend-mode: normal;
                                                opacity: 0;
                                                }
                                </style>
                                </div>
                            </div>
                            </div>
                            <div class="fe-block fe-block-yui_3_17_2_1_1708903619159_13681" style="mix-blend-mode: normal;">
                            <div class="sqs-block html-block sqs-block-html" data-blend-mode="NORMAL" data-block-type="2" data-border-radii="{&quot;topLeft&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;topRight&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;bottomLeft&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;bottomRight&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0}}" id="block-yui_3_17_2_1_1708903619159_13681">
                                <div class="sqs-block-content">
                                <div class="sqs-html-content">
                                    <p style="text-align:center;white-space:pre-wrap;" class="">Copyright ©2024 NAGHEDI Immigration Inc.</p>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                <section data-test="page-section" data-section-theme="" class="page-section
                        full-bleed-section
                        layout-engine-section
                        background-width--full-bleed
                        section-height--medium
                        content-width--wide
                        horizontal-alignment--center
                        vertical-alignment--middle
                        has-background
                        " data-section-id="662b1bc22519083ac1fe8c42" data-controller="SectionWrapperController" data-current-styles="{
                        &quot;backgroundImage&quot;: {
                        &quot;id&quot;: &quot;662b1c0219add13b68174173&quot;,
                        &quot;recordType&quot;: 2,
                        &quot;addedOn&quot;: 1714101250203,
                        &quot;updatedOn&quot;: 1714101252629,
                        &quot;workflowState&quot;: 1,
                        &quot;publishOn&quot;: 1714101250203,
                        &quot;authorId&quot;: &quot;6593abc22f34497e137156cb&quot;,
                        &quot;systemDataId&quot;: &quot;1714101250246-AFIR4H6SSKOPLOYMVUMY&quot;,
                        &quot;systemDataVariants&quot;: &quot;1667x2500,100w,300w,500w,750w,1000w,1500w&quot;,
                        &quot;systemDataSourceType&quot;: &quot;JPG&quot;,
                        &quot;mediaFocalPoint&quot;: {
                        &quot;x&quot;: 0.5,
                        &quot;y&quot;: 0.5,
                        &quot;source&quot;: 3
                        },
                        &quot;colorData&quot;: {
                        &quot;topLeftAverage&quot;: &quot;f2f2f0&quot;,
                        &quot;topRightAverage&quot;: &quot;f3f3f1&quot;,
                        &quot;bottomLeftAverage&quot;: &quot;ebebe9&quot;,
                        &quot;bottomRightAverage&quot;: &quot;ededeb&quot;,
                        &quot;centerAverage&quot;: &quot;efefed&quot;,
                        &quot;suggestedBgColor&quot;: &quot;f0f0ee&quot;
                        },
                        &quot;urlId&quot;: &quot;0ea725acmvx4nqxzxwpqgktq4l5yk9&quot;,
                        &quot;title&quot;: &quot;&quot;,
                        &quot;body&quot;: null,
                        &quot;likeCount&quot;: 0,
                        &quot;commentCount&quot;: 0,
                        &quot;publicCommentCount&quot;: 0,
                        &quot;commentState&quot;: 2,
                        &quot;unsaved&quot;: false,
                        &quot;author&quot;: {
                        &quot;id&quot;: &quot;6593abc22f34497e137156cb&quot;,
                        &quot;displayName&quot;: &quot;Sara Naghedi-Ahmadi&quot;,
                        &quot;firstName&quot;: &quot;Sara&quot;,
                        &quot;lastName&quot;: &quot;Naghedi-Ahmadi&quot;,
                        &quot;avatarUrl&quot;: &quot;https://images.squarespace-cdn.com/content/v2/namespaces/memberAccountAvatars/libraries/6593abc22f34497e137156cb/8297b816-0aae-45e7-b4fc-e85a8e6dc933/Capture.PNG?format=300w&quot;,
                        &quot;bio&quot;: &quot;&quot;,
                        &quot;avatarAssetUrl&quot;: &quot;https://images.squarespace-cdn.com/content/v2/namespaces/memberAccountAvatars/libraries/6593abc22f34497e137156cb/8297b816-0aae-45e7-b4fc-e85a8e6dc933/Capture.PNG?format=300w&quot;
                        },
                        &quot;assetUrl&quot;: &quot;https://images.squarespace-cdn.com/content/v1/6593abc53b38c97cdaf5a338/1714101250246-AFIR4H6SSKOPLOYMVUMY/image-asset.jpeg&quot;,
                        &quot;contentType&quot;: &quot;image/jpeg&quot;,
                        &quot;items&quot;: [ ],
                        &quot;pushedServices&quot;: { },
                        &quot;pendingPushedServices&quot;: { },
                        &quot;originalSize&quot;: &quot;1667x2500&quot;,
                        &quot;recordTypeLabel&quot;: &quot;image&quot;
                        },
                        &quot;imageOverlayOpacity&quot;: 0.15,
                        &quot;backgroundWidth&quot;: &quot;background-width--full-bleed&quot;,
                        &quot;sectionHeight&quot;: &quot;section-height--medium&quot;,
                        &quot;customSectionHeight&quot;: 10,
                        &quot;horizontalAlignment&quot;: &quot;horizontal-alignment--center&quot;,
                        &quot;verticalAlignment&quot;: &quot;vertical-alignment--middle&quot;,
                        &quot;contentWidth&quot;: &quot;content-width--wide&quot;,
                        &quot;customContentWidth&quot;: 50,
                        &quot;backgroundColor&quot;: &quot;&quot;,
                        &quot;sectionTheme&quot;: &quot;&quot;,
                        &quot;sectionAnimation&quot;: &quot;none&quot;,
                        &quot;backgroundMode&quot;: &quot;image&quot;
                        }" data-current-context="{
                        &quot;video&quot;: {
                        &quot;playbackSpeed&quot;: 0.5,
                        &quot;filter&quot;: 1,
                        &quot;filterStrength&quot;: 0,
                        &quot;zoom&quot;: 0,
                        &quot;videoSourceProvider&quot;: &quot;none&quot;
                        },
                        &quot;backgroundImageId&quot;: null,
                        &quot;backgroundMediaEffect&quot;: {
                        &quot;type&quot;: &quot;none&quot;
                        },
                        &quot;divider&quot;: {
                        &quot;enabled&quot;: false
                        },
                        &quot;typeName&quot;: &quot;page&quot;
                        }" data-animation="none" data-fluid-engine-section="" data-controllers-bound="SectionWrapperController">
                    <div class="section-border">
                    <div class="section-background">
                        <img alt="" data-src="https://images.squarespace-cdn.com/content/v1/6593abc53b38c97cdaf5a338/1714101250246-AFIR4H6SSKOPLOYMVUMY/image-asset.jpeg" data-image="https://images.squarespace-cdn.com/content/v1/6593abc53b38c97cdaf5a338/1714101250246-AFIR4H6SSKOPLOYMVUMY/image-asset.jpeg" data-image-dimensions="1667x2500" data-image-focal-point="0.5,0.5" data-load="false" elementtiming="nbf-background" src="./index_files/image-asset(1).jpeg" width="1667" height="2500" sizes="(max-width: 799px) 200vw, 100vw" style="display:block;object-position: 50% 50%" srcset="https://images.squarespace-cdn.com/content/v1/6593abc53b38c97cdaf5a338/1714101250246-AFIR4H6SSKOPLOYMVUMY/image-asset.jpeg?format=100w 100w, https://images.squarespace-cdn.com/content/v1/6593abc53b38c97cdaf5a338/1714101250246-AFIR4H6SSKOPLOYMVUMY/image-asset.jpeg?format=300w 300w, https://images.squarespace-cdn.com/content/v1/6593abc53b38c97cdaf5a338/1714101250246-AFIR4H6SSKOPLOYMVUMY/image-asset.jpeg?format=500w 500w, https://images.squarespace-cdn.com/content/v1/6593abc53b38c97cdaf5a338/1714101250246-AFIR4H6SSKOPLOYMVUMY/image-asset.jpeg?format=750w 750w, https://images.squarespace-cdn.com/content/v1/6593abc53b38c97cdaf5a338/1714101250246-AFIR4H6SSKOPLOYMVUMY/image-asset.jpeg?format=1000w 1000w, https://images.squarespace-cdn.com/content/v1/6593abc53b38c97cdaf5a338/1714101250246-AFIR4H6SSKOPLOYMVUMY/image-asset.jpeg?format=1500w 1500w, https://images.squarespace-cdn.com/content/v1/6593abc53b38c97cdaf5a338/1714101250246-AFIR4H6SSKOPLOYMVUMY/image-asset.jpeg?format=2500w 2500w" fetchpriority="low" loading="lazy" decoding="async" data-loader="sqs">
                        <div class="section-background-overlay" style="opacity: 0.15;"></div>
                    </div>
                    </div>
                    <div class="content-wrapper" style="
                            ">
                    <div class="content">
                        <div data-fluid-engine="true">
                        <style>
                            .fe-662b1bc3db34cb2a2c1e3a37 {
                                    --grid-gutter: calc(var(--sqs-mobile-site-gutter, 6vw) - 11.0px);
                                    --cell-max-width: calc( ( var(--sqs-site-max-width, 1500px) - (11.0px * (8 - 1)) ) / 8 );
                                    display: grid;
                                    position: relative;
                                    grid-area: 1/1/-1/-1;
                                    grid-template-rows: repeat(1,minmax(24px, auto));
                                    grid-template-columns:
                                    minmax(var(--grid-gutter), 1fr)
                                    repeat(8, minmax(0, var(--cell-max-width)))
                                    minmax(var(--grid-gutter), 1fr);
                                    row-gap: 11.0px;
                                    column-gap: 11.0px;
                                    }
                                    @media (min-width: 768px) {
                                    .background-width--inset .fe-662b1bc3db34cb2a2c1e3a37 {
                                    --inset-padding: calc(var(--sqs-site-gutter) * 2);
                                    }
                                    .fe-662b1bc3db34cb2a2c1e3a37 {
                                    --grid-gutter: calc(var(--sqs-site-gutter, 4vw) - 11.0px);
                                    --cell-max-width: calc( ( var(--sqs-site-max-width, 1500px) - (11.0px * (24 - 1)) ) / 24 );
                                    --inset-padding: 0vw;
                                    --row-height-scaling-factor: 0.0215;
                                    --container-width: min(var(--sqs-site-max-width, 1500px), calc(100vw - var(--sqs-site-gutter, 4vw) * 2 - var(--inset-padding) ));
                                    grid-template-rows: repeat(8,minmax(calc(var(--container-width) * var(--row-height-scaling-factor)), auto));
                                    grid-template-columns:
                                    minmax(var(--grid-gutter), 1fr)
                                    repeat(24, minmax(0, var(--cell-max-width)))
                                    minmax(var(--grid-gutter), 1fr);
                                    }
                                    }
                        </style>
                        <div class="fluid-engine fe-662b1bc3db34cb2a2c1e3a37"></div>
                        </div>
                    </div>
                    </div>
                </section>
                </footer>
        `
    }
}



customElements.define('website-header', WebsiteHeader)
customElements.define('website-footer', WebsiteHeader)
