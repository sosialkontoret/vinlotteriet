import {setCompodocJson} from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
import {RouterTestingModule} from "@angular/router/testing";
import {AtomsModule} from "../src/app/shared/components/atoms/atoms.module";
import {MoleculesModule} from "../src/app/shared/components/molecules/molecules.module";
import {OrganismsModule} from "../src/app/shared/components/organisms/organisms.module";
import {TemplatesModule} from "../src/app/shared/components/templates/templates.module";

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
          AtomsModule,
          MoleculesModule,
          OrganismsModule,
          TemplatesModule,
          RouterTestingModule,
        ],
      },
    }
  }
]
