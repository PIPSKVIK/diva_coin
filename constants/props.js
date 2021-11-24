export const PROPS_STRING_DEFAULT = {
  type: String,
  default: '',
};

export const PROPS_BOOLEAN_DEFAULT = {
  type: Boolean,
  default: false,
};

export const PROPS_OBJECT_DEFAULT = {
  type: Object,
  default() {
    return {};
  },
};

export const PROPS_ARRAY_DEFAULT = {
  type: Array,
  default() {
    return [];
  },
};
