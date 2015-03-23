﻿/// <reference path="data.js" />

(function (lightSwitchApplication) {

    var $Screen = msls.Screen,
        $defineScreen = msls._defineScreen,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString,
        $defineShowScreen = msls._defineShowScreen;

    function AktivnostScreen(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AktivnostScreen screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Aktivnosts" type="msls.VisualCollection" elementType="msls.application.Aktivnost">
        /// Gets the aktivnosts for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AktivnostScreen.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AktivnostScreen", parameters);
    }

    msls._addToNamespace("msls.application", {

        AktivnostScreen: $defineScreen(AktivnostScreen, [
            {
                name: "Aktivnosts", kind: "collection", elementType: lightSwitchApplication.Aktivnost,
                createQuery: function () {
                    return this.dataWorkspace.On_line_rasporedData.Aktivnosts;
                }
            }
        ], [
        ]),

        showAktivnostScreen: $defineShowScreen(function showAktivnostScreen(options) {
            /// <summary>
            /// Asynchronously navigates forward to the AktivnostScreen screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("AktivnostScreen", parameters, options);
        })

    });

}(msls.application));
