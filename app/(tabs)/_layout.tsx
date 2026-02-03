import { Tabs } from "expo-router";

export default function RootLayout(){
    return(
        <Tabs>
            <Tabs.Screen name="byee"   options={{headerShown:false,title:'စကားထာ'}}/>
            <Tabs.Screen name="taya" options={{headerShown:false}} />
        </Tabs>
    )
}