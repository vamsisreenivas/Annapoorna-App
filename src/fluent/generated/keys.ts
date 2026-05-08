import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '7bd927ff4158473d9bf8121779663d4d'
                    }
                    calculate_order_item_total: {
                        table: 'sys_script'
                        id: 'f8528a9dfa12468c9ae3662be575114b'
                    }
                    menu_buttermilk: {
                        table: 'x_400063_annapoorn_menu_item'
                        id: '1c671722997c445185f5f3656ce3d4ab'
                    }
                    menu_chicken_curry: {
                        table: 'x_400063_annapoorn_menu_item'
                        id: 'c8266931b6484e94b1815449cd87bd9c'
                    }
                    menu_coconut_chutney: {
                        table: 'x_400063_annapoorn_menu_item'
                        id: '2663fc77ae1342da85b9bdfafe491de3'
                    }
                    menu_curd_rice: {
                        table: 'x_400063_annapoorn_menu_item'
                        id: 'd2550894de714efa8c933ba592ae7ae5'
                    }
                    menu_dosa_plain: {
                        table: 'x_400063_annapoorn_menu_item'
                        id: '2acaabc4e3f5436596cda6e1cf5bc457'
                    }
                    menu_filter_coffee: {
                        table: 'x_400063_annapoorn_menu_item'
                        id: '8694ac1b2ab54adeb9b8144990295862'
                    }
                    menu_idli_sambar: {
                        table: 'x_400063_annapoorn_menu_item'
                        id: '0078749982824ac8941e5f97d18b1a41'
                    }
                    menu_masala_dosa: {
                        table: 'x_400063_annapoorn_menu_item'
                        id: '6b5504c8c4b4451e9ba133aefde6d45a'
                    }
                    menu_mysore_pak: {
                        table: 'x_400063_annapoorn_menu_item'
                        id: '69b1b6c74baf40748496f5a99b9f6d3b'
                    }
                    menu_payasam: {
                        table: 'x_400063_annapoorn_menu_item'
                        id: '1076b15acf4f47dca00d2b1d5717b1e4'
                    }
                    menu_rasam: {
                        table: 'x_400063_annapoorn_menu_item'
                        id: '39583863a7d043dd805a17538f29c1ac'
                    }
                    menu_rava_upma: {
                        table: 'x_400063_annapoorn_menu_item'
                        id: '32b4c5ce41d74ff8bacb00043ba4ecbe'
                    }
                    menu_sambar_vada: {
                        table: 'x_400063_annapoorn_menu_item'
                        id: '772fb429db7f4dea880976c1c137133d'
                    }
                    order_number_generator: {
                        table: 'sys_script'
                        id: '3274297c4db64ee1acc87b3aca4aa136'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'e235529b98e048b996448d23ad1fb01a'
                    }
                    'src_server_business-rules_order-calculations_js': {
                        table: 'sys_module'
                        id: '5e5a3467a47a4b6f80fe09c338d17f24'
                    }
                    'src_server_business-rules_order-number-generator_js': {
                        table: 'sys_module'
                        id: 'cbbeb160b350405f957164741775d132'
                    }
                    update_order_total: {
                        table: 'sys_script'
                        id: 'b442670ce1754a919cf72ee19fb1e2ed'
                    }
                }
                composite: [
                    {
                        table: 'sys_documentation'
                        id: '0046a803a8384c81919665cce65a5488'
                        key: {
                            name: 'x_400063_annapoorn_order'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '01f7cc95d60142ae8e15f8551bd4b9d5'
                        key: {
                            name: 'x_400063_annapoorn_menu_item'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '01fe5e941f8243cb8310abecfc1c112b'
                        key: {
                            name: 'x_400063_annapoorn_customer'
                            element: 'customer_type'
                            value: 'vip'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '024a583c3372406f93623d7aa70fa415'
                        key: {
                            name: 'x_400063_annapoorn_menu_item'
                            element: 'category'
                            value: 'beverage'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '02e111332bec45cd9401b60700773672'
                        key: {
                            name: 'x_400063_annapoorn_order'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '044069dfecc548d282e779c32ba52be9'
                        key: {
                            name: 'x_400063_annapoorn_menu_item'
                            element: 'spice_level'
                            value: 'medium'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '09ca33d68a2743939e3a86b8591a1d4a'
                        key: {
                            name: 'x_400063_annapoorn_customer'
                            element: 'customer_type'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '09da1a060b3c425ca796972d08c5efa9'
                        key: {
                            name: 'x_400063_annapoorn_menu_item'
                            element: 'spice_level'
                            value: 'mild'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '0d4e5603ea334f1495c2010fae7ca5d4'
                        key: {
                            name: 'x_400063_annapoorn_menu_item'
                            element: 'spice_level'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0de0f993493c4bb2ba33ea24943abe50'
                        key: {
                            name: 'x_400063_annapoorn_menu_item'
                            element: 'spice_level'
                            value: 'extra_spicy'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0e48ae264b1f43f9b988707cb7c7e5ed'
                        key: {
                            name: 'x_400063_annapoorn_menu_item'
                            element: 'popular'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '163cd630c2b3432cb79a798bfe5ded74'
                        key: {
                            name: 'x_400063_annapoorn_menu_item'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '164f5cc46faf4d2dbcb18ec21a8c8766'
                        key: {
                            name: 'x_400063_annapoorn_order_item'
                            element: 'line_total'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '18c4847cebeb4a03aa733014744b1470'
                        key: {
                            name: 'x_400063_annapoorn_order_item'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '18ef22e4dd37480281a002fbababb610'
                        key: {
                            name: 'x_400063_annapoorn_order'
                            element: 'order_type'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1ad11aec31f84c0381f1f31e86870db9'
                        key: {
                            name: 'x_400063_annapoorn_customer'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '23b2895883f487146ae0c765eeaad314'
                        key: {
                            sys_ui_section: {
                                id: '57b2495883f487146ae0c765eeaad346'
                                key: {
                                    name: 'x_400063_annapoorn_menu_item'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'preparation_time'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '23b8c538a3f54d8799528619236df3f1'
                        key: {
                            name: 'x_400063_annapoorn_menu_item'
                            element: 'available'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '24d07255051a45638498a0b100ae6474'
                        key: {
                            name: 'x_400063_annapoorn_order_item'
                            element: 'order'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: '25cdfee7eb184a829ced2c38a3aba21d'
                        key: {
                            application_file: '8cb4e91bb1024fd4bf6d19e74e37bfcd'
                            source_artifact: 'bba570bb02c8489788b30a916b48a351'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2782044034824ccd9064bcfce888e9b4'
                        key: {
                            name: 'x_400063_annapoorn_customer'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '27b2895883f487146ae0c765eeaad312'
                        key: {
                            sys_ui_section: {
                                id: '57b2495883f487146ae0c765eeaad346'
                                key: {
                                    name: 'x_400063_annapoorn_menu_item'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '27b2895883f487146ae0c765eeaad319'
                        key: {
                            sys_ui_section: {
                                id: '57b2495883f487146ae0c765eeaad346'
                                key: {
                                    name: 'x_400063_annapoorn_menu_item'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'price'
                            position: '12'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2accd9823aeb4de285420cdf54f9a308'
                        key: {
                            name: 'x_400063_annapoorn_menu_item'
                            element: 'category'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2ba8be6fa5e04c76a2f660b4998abdc8'
                        key: {
                            name: 'x_400063_annapoorn_menu_item'
                            element: 'category'
                            value: 'snack'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '2bb2895883f487146ae0c765eeaad30d'
                        key: {
                            sys_ui_section: {
                                id: '57b2495883f487146ae0c765eeaad346'
                                key: {
                                    name: 'x_400063_annapoorn_menu_item'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'name'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '2bb2895883f487146ae0c765eeaad310'
                        key: {
                            sys_ui_section: {
                                id: '57b2495883f487146ae0c765eeaad346'
                                key: {
                                    name: 'x_400063_annapoorn_menu_item'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'vegetarian'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '2bb2895883f487146ae0c765eeaad317'
                        key: {
                            sys_ui_section: {
                                id: '57b2495883f487146ae0c765eeaad346'
                                key: {
                                    name: 'x_400063_annapoorn_menu_item'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'available'
                            position: '10'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '2fb2895883f487146ae0c765eeaad315'
                        key: {
                            sys_ui_section: {
                                id: '57b2495883f487146ae0c765eeaad346'
                                key: {
                                    name: 'x_400063_annapoorn_menu_item'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'description'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '340b307459a542fc9b708cfd0a89c199'
                        key: {
                            name: 'x_400063_annapoorn_order'
                            element: 'order_type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '345fc971f61c421597a48a9374842a04'
                        key: {
                            name: 'x_400063_annapoorn_menu_item'
                            element: 'image_url'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3bf6b5fdf9be4ec2af62d8aa75ca2415'
                        key: {
                            name: 'x_400063_annapoorn_customer'
                            element: 'loyalty_member'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3e0ee380f65f4dfbb77f2f77b3f2f334'
                        key: {
                            name: 'x_400063_annapoorn_order'
                            element: 'notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3ed0daf96c3444ada6ca103102de0250'
                        key: {
                            name: 'x_400063_annapoorn_menu_item'
                            element: 'category'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '413f8d1aa5324a93a940e07119b7d350'
                        key: {
                            name: 'x_400063_annapoorn_order_item'
                            element: 'unit_price'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '456ae69496a44904a007706aab5aaf78'
                        key: {
                            name: 'x_400063_annapoorn_customer'
                            element: 'notes'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '45f777efaf4c4c159d64a0a60b77a5d9'
                        key: {
                            name: 'x_400063_annapoorn_order'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: '4aa3c6e9fc6749d8a904f0c72fddfa6c'
                        key: {
                            category: 'x_400063_annapoorn_order'
                            prefix: 'ORD'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4d2db52ad4f64c4a8987499a3e84e677'
                        key: {
                            name: 'x_400063_annapoorn_customer'
                            element: 'customer_type'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: '4ff6d3507bb547068a4a62c884ebf688'
                        key: {
                            application_file: 'ddcc32a8f2fb49bcaa4515beef3ef8cf'
                            source_artifact: 'bba570bb02c8489788b30a916b48a351'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '51ac60c1271e46b99db67c88e31832ba'
                        key: {
                            name: 'x_400063_annapoorn_order'
                            element: 'order_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '54028c825d694fcf94149b24c4125cc5'
                        key: {
                            name: 'x_400063_annapoorn_menu_item'
                            element: 'vegetarian'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: '557bf09ab506453d833af0c908e6b2bf'
                        key: {
                            name: 'x_400063_annapoorn/main.js.map'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '576a77d0fcfe40c49be63365b82ac62f'
                        key: {
                            name: 'x_400063_annapoorn_order_item'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '57b2495883f487146ae0c765eeaad346'
                        key: {
                            name: 'x_400063_annapoorn_menu_item'
                            caption: 'NULL'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '580c4291b2fe4024ac42bc92efccad9e'
                        key: {
                            name: 'x_400063_annapoorn_order_item'
                            element: 'special_instructions'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5adc1273a107428f99c6f0b777961839'
                        key: {
                            name: 'x_400063_annapoorn_order'
                            element: 'order_date'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '5e1d35936ba841619cc0ed2cf7f7291b'
                        key: {
                            name: 'x_400063_annapoorn_order'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '60020758d8354dbc9637d56fc5dd4de5'
                        key: {
                            name: 'x_400063_annapoorn_menu_item'
                            element: 'price'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '66c951ed9909484798098841e7923385'
                        key: {
                            name: 'x_400063_annapoorn_customer'
                            element: 'customer_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '686ce9b0bbb74d3a8e4114aa69a0efd4'
                        key: {
                            name: 'x_400063_annapoorn_order'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6a054fe4ef194de4a15e811251d3b89e'
                        key: {
                            name: 'x_400063_annapoorn_order'
                            element: 'notes'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6bc5e4ed0874422fb1a3cbe0cba893ec'
                        key: {
                            name: 'x_400063_annapoorn_menu_item'
                            element: 'vegetarian'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6f44c1f1a7044a0d888ec5f57c9e3735'
                        key: {
                            name: 'x_400063_annapoorn_order'
                            element: 'order_type'
                            value: 'takeaway'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '713df01361fe472394568f739ba79ffa'
                        key: {
                            name: 'x_400063_annapoorn_menu_item'
                            element: 'image_url'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '71a9c6704efc4873b6c5a1aad9cbe6f3'
                        key: {
                            name: 'x_400063_annapoorn_menu_item'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: '7291e01594254192b60f624d1af0af5f'
                        key: {
                            application_file: '557bf09ab506453d833af0c908e6b2bf'
                            source_artifact: 'bba570bb02c8489788b30a916b48a351'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '780a0045775b4039b93473895ed378c9'
                        key: {
                            name: 'x_400063_annapoorn_customer'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '795b9d5a3b2745bd9399eeb5bd12498b'
                        key: {
                            name: 'x_400063_annapoorn_customer'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '7a55bafc030744c69be1b54ff7acc312'
                        key: {
                            name: 'x_400063_annapoorn_menu_item'
                            element: 'category'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7a9af6579d7c4fe39b0cc800142e78e9'
                        key: {
                            name: 'x_400063_annapoorn_menu_item'
                            element: 'recipe'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7f2538bf1f8e48ecaac301717c574022'
                        key: {
                            name: 'x_400063_annapoorn_order'
                            element: 'order_type'
                            value: 'delivery'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7f3b55db109647019f761f12a1bd6221'
                        key: {
                            name: 'x_400063_annapoorn_menu_item'
                            element: 'category'
                            value: 'appetizer'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '860560191f7f4fd0b978d7d9317f50df'
                        key: {
                            name: 'x_400063_annapoorn_order'
                            element: 'status'
                            value: 'completed'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '872a017a6bd04e87acd6335da16d3349'
                        key: {
                            name: 'x_400063_annapoorn_menu_item'
                            element: 'available'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '873d0f2c606948b4abcbb901b8775da5'
                        key: {
                            name: 'x_400063_annapoorn_order_item'
                            element: 'quantity'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '88b64b2c59454dd3af1c68ca1c885b17'
                        key: {
                            name: 'x_400063_annapoorn_customer'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '894601614f91411e84b24ecd8382dc69'
                        key: {
                            name: 'x_400063_annapoorn_order'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8c671a03d7d04b8f97914636df0c99e9'
                        key: {
                            name: 'x_400063_annapoorn_menu_item'
                            element: 'spice_level'
                            value: 'spicy'
                        }
                    },
                    {
                        table: 'sys_ui_page'
                        id: '8cb4e91bb1024fd4bf6d19e74e37bfcd'
                        key: {
                            endpoint: 'x_400063_annapoorn_pos.do'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8e45c539256d44e6857a423f2737ee6d'
                        key: {
                            name: 'x_400063_annapoorn_menu_item'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '90e12dafe9fd4d8fad6e13e9378e2d7d'
                        key: {
                            name: 'x_400063_annapoorn_customer'
                            element: 'address'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '93d15fd6cc774ea780eae247b3e2ece8'
                        key: {
                            name: 'x_400063_annapoorn_order'
                            element: 'customer'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '93dbd38d89a34fef9f6470c084a16f76'
                        key: {
                            name: 'x_400063_annapoorn_customer'
                            element: 'notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '96bd7b6444af44c99190e5da4e4b9b82'
                        key: {
                            name: 'x_400063_annapoorn_customer'
                            element: 'email'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '990bfe243d2d4f6dba8eb025666f9ed5'
                        key: {
                            name: 'x_400063_annapoorn_customer'
                            element: 'email'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9b7073374b2f4ac685a6f7124c178546'
                        key: {
                            name: 'x_400063_annapoorn_menu_item'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9c658089d09e4864a58b65b22ddc5c47'
                        key: {
                            name: 'x_400063_annapoorn_menu_item'
                            element: 'spice_level'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a0c8d1119f9f4ebebe4c9a3defc2ff02'
                        key: {
                            name: 'x_400063_annapoorn_order'
                            element: 'order_number'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a1f63b8070774693ba6e9e08aa6db40b'
                        key: {
                            name: 'x_400063_annapoorn_order'
                            element: 'table_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a1ff72482f8f4d62be311fe87ed6d2c7'
                        key: {
                            name: 'x_400063_annapoorn_customer'
                            element: 'address'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a33a419303b64bf4a7aec902d44d0f99'
                        key: {
                            name: 'x_400063_annapoorn_customer'
                            element: 'loyalty_member'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a3b2895883f487146ae0c765eeaad313'
                        key: {
                            sys_ui_section: {
                                id: '57b2495883f487146ae0c765eeaad346'
                                key: {
                                    name: 'x_400063_annapoorn_menu_item'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'spice_level'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a3b2895883f487146ae0c765eeaad31a'
                        key: {
                            sys_ui_section: {
                                id: '57b2495883f487146ae0c765eeaad346'
                                key: {
                                    name: 'x_400063_annapoorn_menu_item'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '13'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a7b2895883f487146ae0c765eeaad311'
                        key: {
                            sys_ui_section: {
                                id: '57b2495883f487146ae0c765eeaad346'
                                key: {
                                    name: 'x_400063_annapoorn_menu_item'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'category'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a7b2895883f487146ae0c765eeaad318'
                        key: {
                            sys_ui_section: {
                                id: '57b2495883f487146ae0c765eeaad346'
                                key: {
                                    name: 'x_400063_annapoorn_menu_item'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '11'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'abb2895883f487146ae0c765eeaad30f'
                        key: {
                            sys_ui_section: {
                                id: '57b2495883f487146ae0c765eeaad346'
                                key: {
                                    name: 'x_400063_annapoorn_menu_item'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'abb2895883f487146ae0c765eeaad316'
                        key: {
                            sys_ui_section: {
                                id: '57b2495883f487146ae0c765eeaad346'
                                key: {
                                    name: 'x_400063_annapoorn_menu_item'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '9'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ad6b7852e5de40d392a97801470052d4'
                        key: {
                            name: 'x_400063_annapoorn_order'
                            element: 'total_amount'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'afb2895883f487146ae0c765eeaad314'
                        key: {
                            sys_ui_section: {
                                id: '57b2495883f487146ae0c765eeaad346'
                                key: {
                                    name: 'x_400063_annapoorn_menu_item'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b0706a1d1d0a429fbee37ea0c3c808bc'
                        key: {
                            name: 'x_400063_annapoorn_order_item'
                            element: 'order'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b07398cb074649c8aa2d7ed9ea4da5df'
                        key: {
                            name: 'x_400063_annapoorn_order_item'
                            element: 'menu_item'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b22db22d210b4be2893dc44b768d4d96'
                        key: {
                            name: 'x_400063_annapoorn_order'
                            element: 'order_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'b38849687609453eacdfad971165a1f1'
                        key: {
                            name: 'x_400063_annapoorn_order_item'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b62b9176497949f6a43f9515d1ee0b67'
                        key: {
                            name: 'x_400063_annapoorn_order'
                            element: 'status'
                            value: 'ready'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b69fe2de68f84d1ca1f66ad6f7240001'
                        key: {
                            name: 'x_400063_annapoorn_order'
                            element: 'total_amount'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'b8ae617471194ec0b0c0348e5f99c2a6'
                        key: {
                            name: 'x_400063_annapoorn_customer'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b9d393e5ada14b72ae4f97be6726ef3f'
                        key: {
                            name: 'x_400063_annapoorn_menu_item'
                            element: 'category'
                            value: 'main_course'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact'
                        id: 'bba570bb02c8489788b30a916b48a351'
                        key: {
                            name: 'x_400063_annapoorn_pos.do - BYOUI Files'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bd04a672e8954c3592843c8665f971dc'
                        key: {
                            name: 'x_400063_annapoorn_order_item'
                            element: 'quantity'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'be57fcc8d86449608f687185fc725c67'
                        key: {
                            name: 'x_400063_annapoorn_order'
                            element: 'status'
                            value: 'preparing'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bebd9a2367dc410dab4e8638810c29ae'
                        key: {
                            name: 'x_400063_annapoorn_menu_item'
                            element: 'preparation_time'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c2cd51f568da473dbb3aec36e4778c76'
                        key: {
                            name: 'x_400063_annapoorn_order'
                            element: 'status'
                            value: 'pending'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c3e4068500d24789b5f27c1e8622965a'
                        key: {
                            name: 'x_400063_annapoorn_order_item'
                            element: 'line_total'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c79db557cee4419f9a1726b4dc137c89'
                        key: {
                            name: 'x_400063_annapoorn_order'
                            element: 'table_number'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c9ab981295bb4debada3a2ca28661ea8'
                        key: {
                            name: 'x_400063_annapoorn_order_item'
                            element: 'menu_item'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ca230a775fd144b9bea8998b89c8b8e5'
                        key: {
                            name: 'x_400063_annapoorn_order_item'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd2077f8770674275971e821b7d2275e1'
                        key: {
                            name: 'x_400063_annapoorn_order_item'
                            element: 'unit_price'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'd4e55714120c46899d6e672d6341d69d'
                        key: {
                            name: 'x_400063_annapoorn_menu_item'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd5a4b55e76c645289012abef73340bec'
                        key: {
                            name: 'x_400063_annapoorn_customer'
                            element: 'customer_type'
                            value: 'regular'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd985da6a8a3943e78433313166797417'
                        key: {
                            name: 'x_400063_annapoorn_order_item'
                            element: 'special_instructions'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: 'ddcc32a8f2fb49bcaa4515beef3ef8cf'
                        key: {
                            name: 'x_400063_annapoorn/main'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e0dfe6446a51469abcf88786c9ea07fd'
                        key: {
                            name: 'x_400063_annapoorn_order'
                            element: 'status'
                            value: 'served'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e19a598da9394be5ad0478dc3f8b3ae3'
                        key: {
                            name: 'x_400063_annapoorn_order'
                            element: 'customer'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e3fd96a65b084f7b8896e38ac204c6da'
                        key: {
                            name: 'x_400063_annapoorn_order'
                            element: 'status'
                            value: 'cancelled'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e52ebdadee304b8094929e682ddc9c8d'
                        key: {
                            name: 'x_400063_annapoorn_menu_item'
                            element: 'spice_level'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e60e3eba607f4cd0958f7178a4ed5030'
                        key: {
                            name: 'x_400063_annapoorn_menu_item'
                            element: 'popular'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e88f897175cf41338ed450f33aeaaa7f'
                        key: {
                            name: 'x_400063_annapoorn_customer'
                            element: 'phone'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ef27ef03aedc4a488bf24adbca06e840'
                        key: {
                            name: 'x_400063_annapoorn_menu_item'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ef8dfa36f336420b8740db2cc5ffb284'
                        key: {
                            name: 'x_400063_annapoorn_order'
                            element: 'status'
                            value: 'confirmed'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f007ae144ace4c099a8e55506b6e6bc5'
                        key: {
                            name: 'x_400063_annapoorn_order'
                            element: 'order_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f030804e9dc34e8380fa0e8a9155ccca'
                        key: {
                            name: 'x_400063_annapoorn_order'
                            element: 'order_type'
                            value: 'dine_in'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f1f62df6f25146c4a726913986550d70'
                        key: {
                            name: 'x_400063_annapoorn_menu_item'
                            element: 'recipe'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f26d5088832b43c6ac743385295b6ea0'
                        key: {
                            name: 'x_400063_annapoorn_order'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f3a43f4689da4d1e9b7d579ff157219e'
                        key: {
                            name: 'x_400063_annapoorn_customer'
                            element: 'customer_type'
                            value: 'walk_in'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f543e170bca54bb787d715d33733f651'
                        key: {
                            name: 'x_400063_annapoorn_customer'
                            element: 'phone'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f5f69291df5d4db2a29dbdd032742433'
                        key: {
                            name: 'x_400063_annapoorn_menu_item'
                            element: 'category'
                            value: 'dessert'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f640524e070c48ce9bfc49bca82d87d4'
                        key: {
                            name: 'x_400063_annapoorn_menu_item'
                            element: 'price'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f74b41bb10cf4946a9a36f9c897e1ccc'
                        key: {
                            name: 'x_400063_annapoorn_menu_item'
                            element: 'preparation_time'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fe21344e9dc941c7aaf91842d69d3fb8'
                        key: {
                            name: 'x_400063_annapoorn_menu_item'
                            element: 'description'
                            language: 'en'
                        }
                    },
                ]
            }
        }
    }
}
