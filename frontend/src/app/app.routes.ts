import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Profile } from './pages/profile/profile';
import { DeviceComponent } from "./pages/device-component/device-component";
import { ShopComponent } from "./pages/shop-component/shop-component";
import { SettingComponent } from './pages/setting-component/setting-component';
import { PlantsComponent } from './pages/plants-component/plants-component';



export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'profile',
        component: Profile
    },
    {
        path: 'device',
        component: DeviceComponent
    },
    {
        path: 'shop',
        component: ShopComponent
    },
    {
        path: 'settings',
        component: SettingComponent
    },
    {
        path: 'plants',
        component: PlantsComponent
    }
];
