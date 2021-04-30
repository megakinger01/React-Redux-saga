import React from 'react'
import { ThemeProvider } from '@material-ui/styles'
import theme from './theme/tema-config'
import { Provider } from 'react-redux'
import { AppRouter } from './routers/AppRouter'
import { store } from './redux/store'

export const App = () => {
    return (
        <Provider store={store}>
               <ThemeProvider theme={theme}>
                    <AppRouter />
                </ThemeProvider>
        </Provider>
    )
}
