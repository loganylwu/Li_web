import {Ref, ref} from "vue";
import {CssLoader} from "@/model/CssLoader";


interface CssLoaderResult {
  cssLoaders: Ref<CssLoader[]>;
}

/**
 * cssLoader处理形式
 */
export const useCssLoader = (): CssLoaderResult => {
  // 定义目前支持的cssLoader
  const cssLoaders = ref([
    {text: 'css-loader', value: 'css-loader', index: 0, id: 1},
    {text: 'postcss-loader', value: 'postcss-loader', index: 1, id: 2},
    {text: 'sass-loader', value: 'sass-loader', index: 2, id: 3},
  ]);
  return {
    cssLoaders
  }
}
