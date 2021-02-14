import { CountDownComponent } from './count-down';
import { DrawComponent } from './draw';
import { HeaderComponent } from './header';
import { WaitingToStartComponent } from './waiting-to-start';
import { components as atoms } from './atoms';
import { components as molecules } from './molecules';
import { components as organisms } from './organisms';
import { components as templates } from './templates';

export const deprecated: any[] = [CountDownComponent, DrawComponent, HeaderComponent, WaitingToStartComponent];

export const components: any[] = [...atoms, ...molecules, ...organisms, ...templates, ...deprecated];
