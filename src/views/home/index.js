import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Index from './Index/index.js'
import Find from './Find/index.js'
import Consult from './Consult/index.js'
import My from './My/index.js'
import { TabBar } from 'antd-mobile';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // 选中的tab
      selectedTab: 'index',
      // 是否隐藏tabBar
      hidden: false,
      // navBar数据
      navbarData: [{
        title: "首页",
        key: "index",
        icon: 'icon-ind'
      }, {
        title: "找房",
        key: "find",
        icon: 'icon-findHouse'
      }, {
        title: "咨询",
        key: "consult",
        icon: 'icon-myinfo'
      }, {
        title: "我的",
        key: "my",
        icon: 'icon-my'
      }]
    };
  }

  // tabBar渲染
  formateTabBar = () => {
    let { navbarData, selectedTab } = this.state
    let tabBarItem = navbarData.map((item) => {
      return (
        <TabBar.Item
          title={item.title}
          key={item.key}
          icon={<div className={`iconfont ${item.icon}`} style={{
            width: '22px',
            height: '22px'
          }}
          />
          }
          selectedIcon={<div className={`iconfont ${item.icon}`} style={{
            width: '22px',
            height: '22px'
          }}
          />
          }
          selected={selectedTab === item.key}

          onPress={() => {
            this.setState({
              selectedTab: item.key,
            });
            this.props.history.push(`/home/${item.key}`)
          }}
          data-seed="logId"
        >

        </TabBar.Item>)
    })
    return tabBarItem
  }

  render() {
    return (
      <div className='pi' style={{ height: '100%' }}>

        {/* home页面二级子路由 */}
        <Switch>
          <Redirect exact from='/home' to='/home/index'></Redirect>
          <Route path="/home/index" component={Index}></Route>
          <Route path="/home/find" component={Find}></Route>
          <Route path="/home/consult" component={Consult}></Route>
          <Route path="/home/my" component={My}></Route>
        </Switch>

        {/* 页面底部导航栏 */}
        <div style={{ position: 'fixed', height: '50px', width: '100%', bottom: 0 }}>
          <TabBar
            unselectedTintColor="#949494"
            tintColor="#33A3F4"
            barTintColor="white"
            hidden={this.state.hidden}
            noRenderContent={true}
          >
            {/* tabBar组件渲染 */}
            {this.formateTabBar()}
          </TabBar>
        </div>

      </div>
    )
  }

  componentDidMount() {
    let ro = this.props.location.pathname.split('/').pop()
    this.setState({
      selectedTab: ro
    })

  }
}
export default Home
