import React, { Component } from 'react';
import { NavBar, Icon, Carousel, WingBlank } from 'antd-mobile';
import axios from 'axios'


class Index extends Component {
    state = {
        // 首页标题导航处地址
        address: '北京',
        // 轮播图地址
        data: ['1', '2', '3'],
        // 图片高度
        imgHeight: 176,
    }

    componentDidMount() {
        // simulate img loading
        // 首屏渲染数据
        this.getSwiperData()
    }
    // 获取轮播图数据
    getSwiperData = async () => {
        const swiperData = await axios.get('http://localhost:8080/home/swiper')
        this.setState({
            data: swiperData.data.body
        })
    }

    render() {
        return (
            <div>
                {/* 导航栏 */}
                <NavBar
                    mode="dark"
                    leftContent={this.state.address}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />
                    ]}
                >首页</NavBar>
                {/* 轮播图 */}

                <Carousel
                    autoplay
                    infinite
                >
                    {this.state.data.map(val => (
                        <a
                            key={val.id}
                            href="http://www.alipay.com"
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                            <img
                                src={`http://localhost:8080${val.imgSrc}`}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        </a>
                    ))}
                </Carousel>

            </div>
        );
    }
}



export default Index;

