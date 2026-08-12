import { lazy } from "react";

export const SimulatorStartPage = lazy(
    () =>
        import(
            "../pages/SimulatorStartPage/SimulatorStartPage"
        )
);

export const SimulatorSessionPage = lazy(
    () =>
        import(
            "../pages/SimulatorSessionPage/SimulatorSessionPage"
        )
);

export const SimulatorResultPage = lazy(
    () =>
        import(
            "../pages/SimulatorResultPage/SimulatorResultPage"
        )
);