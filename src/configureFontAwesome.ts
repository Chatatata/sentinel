import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faHome,
  faQuestionCircle,
  faExclamationCircle,
  faCheckCircle,
  faCog,
  faCogs,
  faLanguage,
  faLink,
  faSearch,
  faFont,
  faSortNumericUp,
  faToggleOff,
  faPlus,
  faQuestion,
  faUserCircle,
  faSignOutAlt,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';

export default function configureFontAwesome() {
  library.add(faHome);
  library.add(faQuestionCircle);
  library.add(faExclamationCircle);
  library.add(faCheckCircle);
  library.add(faCog);
  library.add(faCogs);
  library.add(faLanguage);
  library.add(faLink);
  library.add(faSearch);
  library.add(faFont);
  library.add(faSortNumericUp);
  library.add(faToggleOff);
  library.add(faPlus);
  library.add(faQuestion);
  library.add(faUserCircle);
  library.add(faSignOutAlt);
  library.add(faUsers);
}
