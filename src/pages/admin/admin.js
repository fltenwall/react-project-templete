import React, {Component} from "react"
import { Layout } from 'antd';
import "./admin.less"

const { Content, Footer } = Layout;

export default class Admin extends Component {
    render() {
        return (
            <Layout className={"adminPane"}>
                <Layout>
                    <Content className={"adminContent"} >
                        Welcome!
                    </Content>
                </Layout>
            </Layout>
        )
    }
}
