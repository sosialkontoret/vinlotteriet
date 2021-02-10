import {setCompodocJson} from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
import {SharedModule} from "../src/app/shared/shared.module";

setCompodocJson(docJson);


export const parameters = {
  actions: {argTypesRegex: "^on[A-Z].*"},
}


export const decorators = [
  (storyFunc) => {
    const story = storyFunc();
    return {
      ...story,
      moduleMetadata: {
        imports: [
          SharedModule,
        ],
      },
    }
  }
]
