import React from 'react'
import './style/home.css'
import { Card, Col } from 'react-bootstrap'
import Carddata from './Carddata'
import Cardcomp from './Cardcomp'

function Home() {
    return (
        <div>
            <div class="About">
                <div class="About_us text-center">ABOUT US</div>
                <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa539wKZMAz7c4otpnn8J-IAhzVcDuOjwHOw&usqp=CAU" class="w-100 about_img" alt="image" /></div>
                <div class="w-70 mx-auto text-center about_card">
                    <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available</p>

                    <div className="my-5">
                        <h1 className="text-center">Our Services</h1>
                    </div>
                    <div className="container-fluid mb-5">
                        <div className="row">
                            <div className="col-10 mx-auto">
                                <div className="row gy-5">
                                    {
                                        Carddata.map((val, ind) => {
                                            return <Cardcomp
                                                text={val.text}
                                                icon={val.icon}
                                            // title={val.title}
                                            />
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                <div class="about_para">
                    <p class="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    <p class="text-justify">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,</p>
                    <p class="text-justify"> sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>

                </div>
                <div class="vision">
                    <div class="text-center">VISION</div>
                    <div class="text-center vision_para" >At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio</div>
                </div>

                <div class="mission_div">
                    <div class="text-center mission">MISSION</div>
                    <div class="courses-area mg-b-15">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <div class="w-100 mission_img">
                                        <img class="w-90" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa539wKZMAz7c4otpnn8J-IAhzVcDuOjwHOw&usqp=CAU" />
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <div class="white-box res-mg-t-30 table-mg-t-pro-n">
                                        <div class="personalised_div">
                                            <p class="personalised">Personalised</p>
                                            <p>because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example</p>
                                        </div>
                                        <div class="commited">
                                            committed
                                        </div>
                                        <div class="commited">
                                            Quality & Service Oriented
                                        </div>
                                        <div class="commited">
                                            TImely
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="mission_div">
                    <div class="text-center mission">CORORATION SOCIAL RESPONSIBILITY</div>
                    <div class="courses-area mg-b-15">
                        <div class="container-fluid">
                            <div class="row">

                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <div class="white-box res-mg-t-30 table-mg-t-pro-n">
                                        <div class="personalised_div">
                                            <p class="personalised">Personalised</p>
                                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus</p>
                                        </div>
                                        <div class="commited">
                                            Support for Rural Farmers
                                        </div>
                                        <div class="commited">
                                            Spiritual
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <div class="w-100 mission_img">
                                        <img class="w-90" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa539wKZMAz7c4otpnn8J-IAhzVcDuOjwHOw&usqp=CAU" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="founder">
                    <div class="text-center">FOUNDER's MESSAGE</div>
                    <div class="founder_img text-center"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa539wKZMAz7c4otpnn8J-IAhzVcDuOjwHOw&usqp=CAU" /></div>
                    <div class="text-center nam">Mr. Jayesh H. Pandya</div>
                    <div>
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus</p>
                    </div>
                    <diiv>
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus</p>
                    </diiv>


                </div>

            </div>
        </div>
    )
}

export default Home