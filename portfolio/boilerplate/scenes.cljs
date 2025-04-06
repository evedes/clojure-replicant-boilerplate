(ns boilerplate.scenes
  (:require [portfolio.replicant :refer-macros [defscene]]
            [portfolio.ui :as portfolio]
            [boilerplate.ui :as ui]))

(defscene button
  (ui/button "Hello World"))

(defn main []
  (portfolio/start!
    {:config
     {:css-paths ["/styles.css"]
      :viewport/defaults
      {:background/background-color "#fff"}}}))
