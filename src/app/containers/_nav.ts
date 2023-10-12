export const nav_data = [
    { 
        heading: "Inventory", 
        visibilty: false, 
        id: 1,
         data_1: [
            { 
                name: "Products", 
                path: "/Product", 
                icon: "fa fa-cart-arrow-down" 
            }, 
            { 
                name: "catagories", 
                path: "/Category",
                 icon: "fa fa-cart-arrow-down" }, 
            { 
                name: "Brand", 
                path: "/Brand", 
                icon: "fa fa-btc" },
        ] }, 
        { 
            heading: "Purchase", 
            visibilty: false, 
            id: 2, 
            data_1: [
                { 
                    name: "Invoice", 
                    path: "/PurchaseInvoice", 
                    icon: "fa fa-file-pdf-o" },
                 { 
                    name: "Est Invoice", 
                    path: "/s1/AboutUs", 
                    icon: "fa fa-file-image-o" }, 
                 { 
                    name: "Vendor", 
                    path: "/VenderCrudComponent", 
                    icon: "fa fa-user-o" },
                ] 
        }, 
        { 
            heading: "Sales", visibilty: false, id: 3, 
            data_1: [
                { 
                    name: "Invoice", 
                    path: "/SalesInvoice", 
                    icon: "fa fa-file-pdf-o" }, 
                { 
                    name: "Est Invoice",
                     path: "/s1/AboutUs", 
                     icon: "fa fa-file-image-o" },
                 { 
                    name: "Customer",
                     path: "/Customer-User", 
                     icon: "fa fa-user-circle-o" },
                ] 
        }, 
        { 
            heading: "Payment",
             visibilty: false,
              id: 4, 
              data_1: 
              [
                { 
                    name: "Vendor", 
                    path: "/VenderCrudComponent", 
                    icon: "fa fa-user-o" }, 
              { 
                name: "Customer", 
                path: "/Customer-User", 
                icon: "fa fa-user-circle" }, 
              { 
                name: "Payment for Vendor ",
                 path: "/VenderPaymentCrudComponent", 
                 icon: "fa fa-cc" },
               { 
                name: "Payment for Customer ", 
                path: "/CustomerPaymentCrud", 
                icon: "fa fa-money" },
            ] 
        }, 
        { 
            heading: "Company Settings", visibilty: false, id: 5, 
            data_1: [
                { 
                    name: "Employee",
                     path: "/Employee-User",
                      icon: "fa fa-address-book-o" }, 
                      { 
                        name: "Assets",
                        path: "/Admin",
                         icon: "fa fa-university" 
                        
                        }, 
                         
                         { 
                            name: "Company Details", 
                            path: "/Admin", 
                            icon: "fa fa-users" 
                        },
        ] 
        },
             
        { 
            heading: "Help", visibilty: false, id: 6, 
            data_1: 
            [
                { 
                    name: "About Us",
                     path: "/s1/AboutUs",
                      icon: "fa fa-address-book-o" },
                { 
                    name: "Contact Us", 
                    path: "/s1/ContactUs", 
                    icon: "fa fa-address-card" },
                ] 
            }, 
            { heading: "Recall", visibilty: false, id: 7,
             data_1: 
             [
                { 
                    name: "Form", 
                    path: "/s1/AboutUs",
                    icon: "fa fa-address-book-o" 
                },
                { 
                    name: "HTTPS", 
                    path: "/s1/AboutUs", 
                    icon: "fa fa-address-book-o" 
                },
                ] 
            },
        ]