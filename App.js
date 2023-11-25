import React, {Component} from 'react'
import {Provider} from 'react-redux'
import {Provider as PaperProvider} from 'react-native-paper'
import { LogBox } from 'react-native'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './src/store/my-store'
import Root from './src/navigator/my-navigator'

const theme = {
    dark: false,
    colors: {
      surface: '#FFF',
      text: '#000',
    },
    fonts: {},
    animation: {},
  };

  export default class App extends Component<Props>{
    render(){
        LogBox.ignoreLogs = ['Remote debugger'];
        return (
            <Provider store={store}>
                <PaperProvider theme={theme}>
                    <PersistGate loading={null} persistor={persistor}>
                        <Root/>
                    </PersistGate>
                </PaperProvider>
            </Provider>
        )
    }
  }