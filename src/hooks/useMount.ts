import {useEffect, useRef} from "react";

/**
 * 模拟mount钩子
 * @param callback 挂载的回调
 * @param unMountCallback 卸载的回调
 */
export const useMount = (callback: () => void, unMountCallback?: () => void) => {
    const mounted = useRef<Boolean>(false);

    useEffect(() => {
        if (!mounted.current) {
            mounted.current = true;
            callback();
            return () => {
                if (unMountCallback) {
                    unMountCallback()

                }
            }
        }
    }, [callback, mounted, unMountCallback]);
};
export default useMount;
