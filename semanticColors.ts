export const semanticColors = {
  "bg": {
    "default": {
      "$type": "color",
      "$value": "{grey.130}",
      "$description": "Default page background."
    },
    "level-01": {
      "$extensions": {
        "studio.tokens": {
          "modify": {
            "type": "darken",
            "value": "0.3",
            "space": "srgb"
          }
        }
      },
      "$type": "color",
      "$value": "{grey.130}",
      "$description": "Strong page/big container background.\nUsed for big containers on top background.default.\n(Body, left pannel, right pannel, event details)."
    },
    "level-02": {
      "$type": "color",
      "$value": "{black.100}",
      "$description": "Strongest page/big container background.\nUsed for big containers on top background.level-01.\n(Body, left pannel, right pannel, event details)."
    }
  },
  "surface": {
    "default": {
      "$type": "color",
      "$value": "{grey.110}",
      "$description": "Default card surface."
    },
    "strong": {
      "$type": "color",
      "$value": "{grey.100}"
    },
    "strongest": {
      "$type": "color",
      "$value": "{neutral.30}"
    },
    "above-tf": {
      "$type": "color",
      "$value": "{neutral.30}",
      "$description": "Above the fold surface color."
    }
  },
  "fill": {
    "weak": {
      "$type": "color",
      "$value": "{grey.20}"
    }
  },
  "border": {
    "default": {
      "$type": "color",
      "$value": "{grey.80}",
      "$description": "Default border color."
    },
    "separator": {
      "$type": "color",
      "$value": "{grey.30}",
      "$description": "Separator border color."
    },
    "weak": {
      "$type": "color",
      "$value": "{grey.90}",
      "$description": "Weak border color."
    },
    "strong": {
      "$type": "color",
      "$value": "{neutral.70}",
      "$description": "Strong border color."
    }
  },
  "on": {
    "surface": {
      "head": {
        "$type": "color",
        "$value": "{grey.20}",
        "$description": "Heading text color."
      },
      "body": {
        "$type": "color",
        "$value": "{grey.30}",
        "$description": "Body text color."
      },
      "label": {
        "$type": "color",
        "$value": "{neutral.70}",
        "$description": "Label text color."
      },
      "disabled": {
        "$type": "color",
        "$value": "{grey.70}",
        "$description": "Disabled text color."
      },
      "primary": {
        "head": {
          "$type": "color",
          "$value": "{primary.60}",
          "$description": "Default Primary color on surface. (Links, tabs, chips, labels)"
        },
        "body": {
          "$type": "color",
          "$value": "{primary.70}",
          "$description": "Default Primary color on surface. (Links, tabs, chips, labels)"
        },
        "label": {
          "$type": "color",
          "$value": "{primary.80}",
          "$description": "Default Primary color on surface. (Links, tabs, chips, labels)"
        },
        "active": {
          "$type": "color",
          "$value": "{primary.90}",
          "$description": "Active Primary color on surface. (Links, tabs, chips, labels)"
        },
        "focus": {
          "$type": "color",
          "$value": "{primary.100}",
          "$description": "Focused Primary color on surface. (Links, tabs, chips, labels)"
        },
        "disabled": {
          "$type": "color",
          "$value": "{primary.40}",
          "$description": "Disabled Primary color on surface. (Links, tabs, chips, labels)"
        }
      },
      "secondary": {
        "head": {
          "$type": "color",
          "$value": "{secondary.50}",
          "$description": "Secondary Object color on surface."
        },
        "body": {
          "$type": "color",
          "$value": "{secondary.60}",
          "$description": "Secondary Object color on surface -> body hierarchy."
        },
        "label": {
          "$type": "color",
          "$value": "{secondary.70}",
          "$description": "Secondary Object color on surface -> label hierarchy."
        }
      },
      "sbrand-01": {
        "head": {
          "$type": "color",
          "$value": "{sub-brand-01.40}",
          "$description": "sub-brand-01 Object color on surface."
        },
        "body": {
          "$type": "color",
          "$value": "{sub-brand-01.60}",
          "$description": "sub-brand-01 Object color on surface -> body hierarchy."
        },
        "label": {
          "$type": "color",
          "$value": "{sub-brand-01.70}",
          "$description": "sub-brand-01 Object color on surface -> label hierarchy."
        }
      },
      "sbrand-02": {
        "head": {
          "$type": "color",
          "$value": "{sub-brand-02.60}",
          "$description": "sub-brand-02 Object color on surface."
        },
        "body": {
          "$type": "color",
          "$value": "{sub-brand-02.70}",
          "$description": "sub-brand-02 Object color on surface -> body hierarchy."
        },
        "label": {
          "$type": "color",
          "$value": "{sub-brand-02.80}",
          "$description": "sub-brand-02 Object color on surface -> label hierarchy."
        }
      },
      "success": {
        "head": {
          "$type": "color",
          "$value": "{positive.50}",
          "$description": "Success Object color on surface."
        },
        "body": {
          "$type": "color",
          "$value": "{positive.60}",
          "$description": "Success Object color on surface -> body hierarchy."
        },
        "label": {
          "$type": "color",
          "$value": "{positive.70}",
          "$description": "Success Object color on surface -> label hierarchy."
        }
      },
      "info": {
        "head": {
          "$type": "color",
          "$value": "{informative.50}",
          "$description": "Info Object color on surface."
        },
        "body": {
          "$type": "color",
          "$value": "{informative.60}",
          "$description": "Info Object color on surface -> body hierarchy."
        },
        "label": {
          "$type": "color",
          "$value": "{informative.70}",
          "$description": "Info Object color on surface -> label hierarchy."
        }
      },
      "warning": {
        "head": {
          "$type": "color",
          "$value": "{notice.50}",
          "$description": "Warning Object color on surface."
        },
        "body": {
          "$type": "color",
          "$value": "{notice.60}",
          "$description": "Warning Object color on surface -> body hierarchy."
        },
        "label": {
          "$type": "color",
          "$value": "{notice.70}",
          "$description": "Warning Object color on surface -> label hierarchy."
        }
      },
      "error": {
        "head": {
          "$type": "color",
          "$value": "{negative.50}",
          "$description": "Error Object color on surface."
        },
        "body": {
          "$type": "color",
          "$value": "{negative.50}",
          "$description": "Error Object color on surface -> body hierarchy."
        },
        "label": {
          "$type": "color",
          "$value": "{negative.60}",
          "$description": "Error Object color on surface -> label hierarchy."
        }
      }
    }
  },
  "inverted": {
    "surface": {
      "weak": {
        "$type": "color",
        "$value": "{white.100}",
        "$description": "Inverted weak surface."
      },
      "default": {
        "$type": "color",
        "$value": "{white.100}",
        "$description": "Inverted default surface."
      },
      "strong": {
        "$type": "color",
        "$value": "{neutral.10}",
        "$description": "Inverted default surface."
      }
    },
    "fill": {
      "disabled": {
        "$type": "color",
        "$value": "{neutral.30}"
      }
    },
    "border": {
      "weak": {
        "$type": "color",
        "$value": "{grey.30}",
        "$description": "Default border color used inside surface.inverse."
      },
      "default": {
        "$type": "color",
        "$value": "{grey.40}",
        "$description": "Default border color used inside surface.inverse."
      },
      "strong": {
        "$type": "color",
        "$value": "{grey.50}",
        "$description": "Strong border color used inside surface.inverse."
      },
      "separator": {
        "$type": "color",
        "$value": "{grey.30}",
        "$description": "Separator border color."
      }
    },
    "on": {
      "surface": {
        "head": {
          "$type": "color",
          "$value": "{grey.90}",
          "$description": "Heading text color on surface-inverted."
        },
        "body": {
          "$type": "color",
          "$value": "{grey.70}",
          "$description": "Body text color on surface-inverted."
        },
        "label": {
          "$type": "color",
          "$value": "{grey.50}",
          "$description": "Label text color on surface-inverted."
        },
        "disabled": {
          "$type": "color",
          "$value": "{neutral.60}",
          "$description": "Disabled text color on surface-inverted."
        },
        "primary": {
          "$type": "color",
          "$value": "{primary.30}",
          "$description": "Primary Object color on inverted.surface."
        },
        "secondary": {
          "$type": "color",
          "$value": "{secondary.30}",
          "$description": "Secondary Object color on inverted.surface."
        },
        "success": {
          "head": {
            "$type": "color",
            "$value": "{positive.60}",
            "$description": "Success Object color on inverted.surface."
          },
          "body": {
            "$type": "color",
            "$value": "{positive.70}",
            "$description": "Success Object color on inverted.surface -> body hierarchy."
          },
          "label": {
            "$type": "color",
            "$value": "{positive.80}",
            "$description": "Success Object color on inverted.surface -> label hierarchy."
          }
        },
        "info": {
          "head": {
            "$type": "color",
            "$value": "{informative.20}",
            "$description": "Info Object color on inverted.surface."
          },
          "body": {
            "$type": "color",
            "$value": "{informative.40}",
            "$description": "Info Object color on inverted.surface -> body hierarchy."
          },
          "label": {
            "$type": "color",
            "$value": "{informative.50}",
            "$description": "Info Object color on inverted.surface -> label hierarchy."
          }
        },
        "warning": {
          "head": {
            "$type": "color",
            "$value": "{notice.30}",
            "$description": "Warning Object color on inverted.surface."
          },
          "body": {
            "$type": "color",
            "$value": "{notice.40}",
            "$description": "Warning Object color on inverted.surface -> body hierarchy."
          },
          "label": {
            "$type": "color",
            "$value": "{notice.50}",
            "$description": "Warning Object color on inverted.surface -> label hierarchy."
          }
        },
        "error": {
          "head": {
            "$type": "color",
            "$value": "{negative.30}",
            "$description": "Error Object color on inverted.surface."
          },
          "body": {
            "$type": "color",
            "$value": "{negative.30}",
            "$description": "Error Object color on inverted.surface -> body hierarchy."
          },
          "label": {
            "$type": "color",
            "$value": "{negative.30}",
            "$description": "Error Object color on inverted.surface -> label hierarchy."
          }
        }
      },
      "fill": {
        "neutral": {
          "disabled": {
            "$type": "color",
            "$value": "{neutral.60}"
          }
        }
      }
    }
  },
  "grey": {
    "surface": {
      "default": {
        "$type": "color",
        "$value": "{grey.30}",
        "$description": "Brand primary weak color surface."
      }
    },
    "fill": {
      "default": {
        "$type": "color",
        "$value": "{grey.100}",
        "$description": "Primary action color - default state."
      },
      "active": {
        "$type": "color",
        "$value": "{grey.110}",
        "$description": "Primary action color - active state."
      },
      "disabled": {
        "$type": "color",
        "$value": "{grey.120}",
        "$description": "Primary action color - disabled state."
      }
    },
    "border": {
      "default": {
        "$type": "color",
        "$value": "{grey.90}",
        "$description": "Primary weak border color."
      }
    },
    "on": {
      "surface": {
        "default": {
          "$type": "color",
          "$value": "{grey.70}",
          "$description": "Object color inside primary.surface.default"
        }
      },
      "fill": {
        "default": {
          "$type": "color",
          "$value": "{grey.20}",
          "$description": "Default Object color inside fill.primary."
        },
        "disabled": {
          "$type": "color",
          "$value": "{grey.70}",
          "$description": "Default Object color inside fill.primary."
        }
      }
    }
  },
  "neutral": {
    "surface": {
      "weak": {
        "$type": "color",
        "$value": "{neutral.10}"
      },
      "default": {
        "$type": "color",
        "$value": "{neutral.20}"
      },
      "strong": {
        "$type": "color",
        "$value": "{neutral.30}"
      }
    },
    "fill": {
      "weak": {
        "$type": "color",
        "$value": "{neutral.90}"
      },
      "default": {
        "$type": "color",
        "$value": "{neutral.70}"
      },
      "active": {
        "$type": "color",
        "$value": "{neutral.100}"
      },
      "disabled": {
        "$type": "color",
        "$value": "{grey.90}"
      }
    },
    "on": {
      "surface": {
        "weak": {
          "$type": "color",
          "$value": "{neutral.50}"
        },
        "default": {
          "$type": "color",
          "$value": "{neutral.60}"
        },
        "strong": {
          "$type": "color",
          "$value": "{grey.100}"
        }
      },
      "fill": {
        "disabled": {
          "$type": "color",
          "$value": "{neutral.70}"
        },
        "default": {
          "$type": "color",
          "$value": "{surface.default}"
        }
      }
    },
    "border": {
      "default": {
        "$type": "color",
        "$value": "{neutral.90}"
      }
    }
  },
  "primary": {
    "surface": {
      "default": {
        "$type": "color",
        "$value": "{primary.80}",
        "$description": "Brand primary weak color surface."
      },
      "strong": {
        "$type": "color",
        "$value": "{primary.100}",
        "$description": "Brand primary color strong color surface."
      }
    },
    "fill": {
      "default": {
        "$type": "color",
        "$value": "{primary.70}",
        "$description": "Primary action color - default state."
      },
      "active": {
        "$type": "color",
        "$value": "{primary.60}",
        "$description": "Primary action color - active state."
      },
      "disabled": {
        "$type": "color",
        "$value": "{primary.110}",
        "$description": "Primary action color - disabled state."
      }
    },
    "border": {
      "strong": {
        "$type": "color",
        "$value": "{primary.50}",
        "$description": "Action border color."
      },
      "default": {
        "$type": "color",
        "$value": "{primary.80}",
        "$description": "Primary weak border color."
      }
    },
    "on": {
      "surface": {
        "default": {
          "$type": "color",
          "$value": "{primary.10}",
          "$description": "Object color inside primary.surface.default"
        }
      },
      "fill": {
        "default": {
          "$type": "color",
          "$value": "{grey.130}",
          "$description": "Default Object color inside fill.primary."
        }
      }
    }
  },
  "secondary": {
    "surface": {
      "default": {
        "$type": "color",
        "$value": "{secondary.120}",
        "$description": "Brand secondary weak color surface."
      },
      "strong": {
        "$type": "color",
        "$value": "{secondary.90}",
        "$description": "Brand secondary color strong color surface."
      }
    },
    "fill": {
      "default": {
        "$type": "color",
        "$value": "{secondary.60}",
        "$description": "Secondary action color - default state."
      },
      "active": {
        "$type": "color",
        "$value": "{secondary.70}",
        "$description": "Secondary action color - active state."
      }
    },
    "border": {
      "default": {
        "$type": "color",
        "$value": "{secondary.80}",
        "$description": "Secondary weak border color."
      }
    },
    "on": {
      "surface": {
        "default": {
          "$type": "color",
          "$value": "{secondary.20}",
          "$description": "Object color on secondary.surface.default."
        }
      },
      "fill": {
        "default": {
          "$type": "color",
          "$value": "{white.100}",
          "$description": "Object color on secondary.fill.default."
        }
      }
    }
  },
  "sbrand-01": {
    "surface": {
      "default": {
        "$type": "color",
        "$value": "{sub-brand-01.110}",
        "$description": "Brand sub-brand-01 weak color surface."
      },
      "strong": {
        "$type": "color",
        "$value": "{sub-brand-01.100}",
        "$description": "Brand sub-brand-01 color strong color surface."
      }
    },
    "fill": {
      "default": {
        "$type": "color",
        "$value": "{sub-brand-01.70}",
        "$description": "sub-brand-01 action color - default state."
      },
      "active": {
        "$type": "color",
        "$value": "{sub-brand-01.30}",
        "$description": "sub-brand-01 action color - active state."
      }
    },
    "border": {
      "default": {
        "$type": "color",
        "$value": "{sub-brand-01.70}",
        "$description": "sub-brand-01 weak border color."
      },
      "strong": {
        "$type": "color",
        "$value": "{sub-brand-01.80}",
        "$description": "Action border color."
      }
    },
    "on": {
      "surface": {
        "default": {
          "$type": "color",
          "$value": "{sub-brand-01.50}",
          "$description": "Object color inside sub-brand-01.surface.default"
        }
      },
      "fill": {
        "default": {
          "$type": "color",
          "$value": "{sub-brand-01.120}",
          "$description": "Default Object color inside fill.sub-brand-01."
        }
      }
    }
  },
  "sbrand-02": {
    "surface": {
      "default": {
        "$type": "color",
        "$value": "{sub-brand-02.110}",
        "$description": "Brand sub-brand-02 weak color surface."
      },
      "strong": {
        "$type": "color",
        "$value": "{sub-brand-02.100}",
        "$description": "Brand sub-brand-02 color strong color surface."
      }
    },
    "fill": {
      "default": {
        "$type": "color",
        "$value": "{sub-brand-02.60}",
        "$description": "sub-brand-02 action color - default state."
      },
      "active": {
        "$type": "color",
        "$value": "{sub-brand-02.70}",
        "$description": "sub-brand-02 action color - active state."
      }
    },
    "border": {
      "default": {
        "$type": "color",
        "$value": "{sub-brand-02.60}",
        "$description": "sub-brand-02 weak border color."
      },
      "strong": {
        "$type": "color",
        "$value": "{sub-brand-02.80}",
        "$description": "Action border color."
      }
    },
    "on": {
      "surface": {
        "default": {
          "$type": "color",
          "$value": "{sub-brand-02.50}",
          "$description": "Object color inside sub-brand-02.surface.default"
        }
      },
      "fill": {
        "default": {
          "$type": "color",
          "$value": "{sub-brand-02.130}",
          "$description": "Default Object color inside fill.sub-brand-02."
        }
      }
    }
  },
  "success": {
    "surface": {
      "default": {
        "$type": "color",
        "$value": "{positive.110}"
      }
    },
    "fill": {
      "default": {
        "$type": "color",
        "$value": "{positive.90}",
        "$description": "Success action color - default state."
      },
      "active": {
        "$type": "color",
        "$value": "{positive.100}",
        "$description": "Success action color - active state."
      }
    },
    "border": {
      "default": {
        "$type": "color",
        "$value": "{positive.70}",
        "$description": "For success surfaces / cards / inputs."
      }
    },
    "on": {
      "surface": {
        "default": {
          "$type": "color",
          "$value": "{positive.40}",
          "$description": "Object color on success.surface."
        }
      },
      "fill": {
        "default": {
          "$type": "color",
          "$value": "{white.100}",
          "$description": "Object color on success.fill.default."
        }
      }
    }
  },
  "info": {
    "surface": {
      "default": {
        "$type": "color",
        "$value": "{informative.110}"
      }
    },
    "fill": {
      "default": {
        "$type": "color",
        "$value": "{informative.80}",
        "$description": "Info action color - default state."
      },
      "active": {
        "$type": "color",
        "$value": "{informative.100}",
        "$description": "Info action color - active state."
      }
    },
    "border": {
      "default": {
        "$type": "color",
        "$value": "{informative.60}",
        "$description": "For info surfaces / cards / inputs."
      }
    },
    "on": {
      "surface": {
        "default": {
          "$type": "color",
          "$value": "{informative.40}",
          "$description": "Object color on info.surface."
        }
      },
      "fill": {
        "default": {
          "$type": "color",
          "$value": "{white.100}",
          "$description": "Default Object color on surface.fill."
        }
      }
    }
  },
  "warning": {
    "surface": {
      "default": {
        "$type": "color",
        "$value": "{notice.110}"
      }
    },
    "fill": {
      "default": {
        "$type": "color",
        "$value": "{notice.60}",
        "$description": "Warning action color - default state."
      },
      "active": {
        "$type": "color",
        "$value": "{notice.70}",
        "$description": "Warning action color - active state."
      }
    },
    "border": {
      "default": {
        "$type": "color",
        "$value": "{notice.80}",
        "$description": "For warning surfaces / cards / inputs."
      }
    },
    "on": {
      "surface": {
        "default": {
          "$type": "color",
          "$value": "{notice.50}",
          "$description": "Object color on warning.surface."
        }
      },
      "fill": {
        "default": {
          "$type": "color",
          "$value": "{notice.110}",
          "$description": "Default Object color on warning.surface."
        }
      }
    }
  },
  "error": {
    "surface": {
      "default": {
        "$type": "color",
        "$value": "{negative.110}"
      }
    },
    "fill": {
      "default": {
        "$type": "color",
        "$value": "{negative.70}",
        "$description": "Error action color - default state."
      },
      "active": {
        "$type": "color",
        "$value": "{negative.100}",
        "$description": "Error action color - active state."
      }
    },
    "border": {
      "default": {
        "$type": "color",
        "$value": "{negative.100}",
        "$description": "For error surfaces / cards / inputs."
      }
    },
    "on": {
      "surface": {
        "default": {
          "$type": "color",
          "$value": "{negative.40}",
          "$description": "Object color on error.surface."
        }
      },
      "fill": {
        "default": {
          "$type": "color",
          "$value": "{white.100}",
          "$description": "Object color on error.fill.default."
        }
      }
    }
  },
  "shadow": {
    "xs": {
      "$type": "boxShadow",
      "$value": {
        "x": "{shadow.base.xs.x}",
        "y": "{shadow.base.xs.y}",
        "blur": "{shadow.base.xs.blur}",
        "spread": "{shadow.base.xs.spread}",
        "color": "{black.20}",
        "type": "dropShadow"
      }
    },
    "sm": {
      "$type": "boxShadow",
      "$value": {
        "x": "{shadow.base.sm.x}",
        "y": "{shadow.base.sm.y}",
        "blur": "{shadow.base.sm.blur}",
        "spread": "{shadow.base.sm.spread}",
        "color": "{black.20}",
        "type": "dropShadow"
      }
    },
    "md": {
      "$type": "boxShadow",
      "$value": {
        "x": "{shadow.base.md.x}",
        "y": "{shadow.base.md.y}",
        "blur": "{shadow.base.md.blur}",
        "spread": "{shadow.base.md.spread}",
        "color": "{black.20}",
        "type": "dropShadow"
      }
    },
    "lg": {
      "$type": "boxShadow",
      "$value": {
        "x": "{shadow.base.lg.x}",
        "y": "{shadow.base.lg.y}",
        "blur": "{shadow.base.lg.blur}",
        "spread": "{shadow.base.lg.spread}",
        "color": "{black.20}",
        "type": "dropShadow"
      }
    },
    "xl": {
      "$type": "boxShadow",
      "$value": {
        "x": "{shadow.base.xl.x}",
        "y": "{shadow.base.xl.y}",
        "blur": "{shadow.base.xl.blur}",
        "spread": "{shadow.base.xl.spread}",
        "color": "{black.20}",
        "type": "dropShadow"
      }
    }
  },
  "lvl1": {
    "surface": {
      "$type": "color",
      "$value": "radial-gradient(202.5% 149.85% at 55.74% 11.82%, rgba(18, 42, 143, 0.8) 0%, rgba(8, 19, 66, 0.371248) 48.76%, rgba(0, 0, 0, 0) 100%), #121E33",
      "$description": "Gamification modal surface color."
    },
    "border": {
      "default": {
        "$type": "color",
        "$value": "{transparent}",
        "$description": "Gamification modal border color."
      }
    },
    "on": {
      "surface": {
        "head": {
          "$type": "color",
          "$value": "{white.100}",
          "$description": "On surface head color."
        },
        "body": {
          "$extensions": {
            "studio.tokens": {
              "modify": {
                "type": "alpha",
                "value": "0.8",
                "space": "srgb"
              }
            }
          },
          "$type": "color",
          "$value": "{white.100}",
          "$description": "On surface body color."
        }
      }
    },
    "head": {
      "fill": {
        "$type": "color",
        "$value": "{transparent}",
        "$description": "Gamification modal header fill color."
      }
    },
    "inner": {
      "fill": {
        "$extensions": {
          "studio.tokens": {
            "modify": {
              "type": "alpha",
              "value": "0.15",
              "space": "srgb"
            }
          }
        },
        "$type": "color",
        "$value": "{black.100}",
        "$description": "Gamification modal inner fill color."
      },
      "border": {
        "default": {
          "$extensions": {
            "studio.tokens": {
              "modify": {
                "type": "alpha",
                "value": "0.1",
                "space": "srgb"
              }
            }
          },
          "$type": "color",
          "$value": "{white.100}",
          "$description": "Gamification modal inner border color."
        }
      }
    }
  },
  "lvl2": {
    "surface": {
      "$type": "color",
      "$value": "radial-gradient(154.09% 94.21% at 50.13% 50%, #6E1EAB 0%, rgba(8, 19, 66, 0.46406) 48.76%, rgba(0, 0, 0, 0) 100%), linear-gradient(180deg, #2C054C 67.07%, rgba(44, 5, 76, 0.63) 100%)",
      "$description": "Gamification modal surface color."
    },
    "border": {
      "default": {
        "$type": "color",
        "$value": "{transparent}",
        "$description": "Gamification modal border color."
      }
    },
    "on": {
      "surface": {
        "head": {
          "$type": "color",
          "$value": "{white.100}",
          "$description": "On surface head color."
        },
        "body": {
          "$extensions": {
            "studio.tokens": {
              "modify": {
                "type": "alpha",
                "value": "0.8",
                "space": "srgb"
              }
            }
          },
          "$type": "color",
          "$value": "{white.100}",
          "$description": "On surface body color."
        }
      }
    },
    "head": {
      "fill": {
        "$type": "color",
        "$value": "{transparent}",
        "$description": "Gamification modal header fill color."
      }
    },
    "inner": {
      "fill": {
        "$extensions": {
          "studio.tokens": {
            "modify": {
              "type": "alpha",
              "value": "0.08",
              "space": "srgb"
            }
          }
        },
        "$type": "color",
        "$value": "{white.100}",
        "$description": "Gamification modal inner fill color."
      },
      "border": {
        "default": {
          "$extensions": {
            "studio.tokens": {
              "modify": {
                "type": "alpha",
                "value": "0.1",
                "space": "srgb"
              }
            }
          },
          "$type": "color",
          "$value": "{white.100}",
          "$description": "Gamification modal inner border color."
        }
      }
    }
  },
  "lvl3": {
    "surface": {
      "$type": "color",
      "$value": "radial-gradient(202.5% 149.85% at 55.74% 11.82%, rgba(18, 42, 143, 0.8) 0%, rgba(8, 19, 66, 0.371248) 48.76%, rgba(0, 0, 0, 0) 100%), #121E33",
      "$description": "Gamification modal surface color."
    },
    "border": {
      "default": {
        "$type": "color",
        "$value": "{transparent}",
        "$description": "Gamification modal border color."
      }
    },
    "on": {
      "surface": {
        "head": {
          "$type": "color",
          "$value": "{white.100}",
          "$description": "On surface head color."
        },
        "body": {
          "$extensions": {
            "studio.tokens": {
              "modify": {
                "type": "alpha",
                "value": "0.8",
                "space": "srgb"
              }
            }
          },
          "$type": "color",
          "$value": "{white.100}",
          "$description": "On surface body color."
        }
      }
    },
    "head": {
      "fill": {
        "$type": "color",
        "$value": "{transparent}",
        "$description": "Gamification modal header fill color."
      }
    },
    "inner": {
      "fill": {
        "$extensions": {
          "studio.tokens": {
            "modify": {
              "type": "alpha",
              "value": "0.15",
              "space": "srgb"
            }
          }
        },
        "$type": "color",
        "$value": "{black.100}",
        "$description": "Gamification modal inner fill color."
      },
      "border": {
        "default": {
          "$extensions": {
            "studio.tokens": {
              "modify": {
                "type": "alpha",
                "value": "0.1",
                "space": "srgb"
              }
            }
          },
          "$type": "color",
          "$value": "{white.100}",
          "$description": "Gamification modal inner border color."
        }
      }
    }
  },
  "lvl4": {
    "surface": {
      "$type": "color",
      "$value": "linear-gradient(200deg, #193463 26%, #161C26 130%)",
      "$description": "Gamification modal surface color."
    },
    "border": {
      "default": {
        "$type": "color",
        "$value": "{transparent}",
        "$description": "Gamification modal border color."
      }
    },
    "on": {
      "surface": {
        "head": {
          "$type": "color",
          "$value": "{white.100}",
          "$description": "On surface head color."
        },
        "body": {
          "$extensions": {
            "studio.tokens": {
              "modify": {
                "type": "alpha",
                "value": "0.8",
                "space": "srgb"
              }
            }
          },
          "$type": "color",
          "$value": "{white.100}",
          "$description": "On surface body color."
        }
      }
    },
    "head": {
      "fill": {
        "$type": "color",
        "$value": "{transparent}",
        "$description": "Gamification modal header fill color."
      }
    },
    "inner": {
      "fill": {
        "$extensions": {
          "studio.tokens": {
            "modify": {
              "type": "alpha",
              "value": "0.08",
              "space": "srgb"
            }
          }
        },
        "$type": "color",
        "$value": "{white.100}",
        "$description": "Gamification modal inner fill color."
      },
      "border": {
        "default": {
          "$extensions": {
            "studio.tokens": {
              "modify": {
                "type": "alpha",
                "value": "0.1",
                "space": "srgb"
              }
            }
          },
          "$type": "color",
          "$value": "{white.100}",
          "$description": "Gamification modal inner border color."
        }
      }
    }
  }
};
