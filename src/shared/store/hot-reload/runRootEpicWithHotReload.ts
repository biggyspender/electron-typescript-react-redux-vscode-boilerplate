import { EpicMiddleware, ActionsObservable, StateObservable } from "redux-observable";
import { BehaviorSubject } from "rxjs";
import { switchMap } from "rxjs/operators";
import { getRootEpic } from '../../epics';
import RootActions from "../../actions";
import { RootState } from "../../../shared/reducers";


export default function runRootEpicWithHotReload(epicMw: EpicMiddleware<RootActions>) {
    const getHotRootEpic = () => {
        const epic = getRootEpic();
        const epic$ = new BehaviorSubject(epic);
        const hotReloadingEpic = (a$: ActionsObservable<RootActions>, s$: StateObservable<RootState>, deps: {}) =>
            epic$.pipe(
                switchMap(epic => epic(a$, s$, deps))
            );

        if (module.hot) {
            module.hot.accept('../../epics', () => {
                console.info("hot-reloading epics")
                epic$.next(getRootEpic());
                console.warn("epics reloaded");
            });
        }
        return hotReloadingEpic;
    }
    const rootEpic = getHotRootEpic();
    epicMw.run(rootEpic as any);
}