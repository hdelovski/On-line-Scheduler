/// <reference path="data.js" />

(function (lightSwitchApplication) {

    msls._addEntryPoints(lightSwitchApplication.Aktivnost, {
        /// <field>
        /// Called when a new aktivnost is created.
        /// <br/>created(msls.application.Aktivnost entity)
        /// </field>
        created: [lightSwitchApplication.Aktivnost]
    });

    msls._addEntryPoints(lightSwitchApplication.Izbrani_predmeti, {
        /// <field>
        /// Called when a new izbrani_predmeti is created.
        /// <br/>created(msls.application.Izbrani_predmeti entity)
        /// </field>
        created: [lightSwitchApplication.Izbrani_predmeti]
    });

    msls._addEntryPoints(lightSwitchApplication.Predmet, {
        /// <field>
        /// Called when a new predmet is created.
        /// <br/>created(msls.application.Predmet entity)
        /// </field>
        created: [lightSwitchApplication.Predmet]
    });

    msls._addEntryPoints(lightSwitchApplication.Profesor, {
        /// <field>
        /// Called when a new profesor is created.
        /// <br/>created(msls.application.Profesor entity)
        /// </field>
        created: [lightSwitchApplication.Profesor]
    });

    msls._addEntryPoints(lightSwitchApplication.Prostorija, {
        /// <field>
        /// Called when a new prostorija is created.
        /// <br/>created(msls.application.Prostorija entity)
        /// </field>
        created: [lightSwitchApplication.Prostorija]
    });

    msls._addEntryPoints(lightSwitchApplication.Semestar, {
        /// <field>
        /// Called when a new semestar is created.
        /// <br/>created(msls.application.Semestar entity)
        /// </field>
        created: [lightSwitchApplication.Semestar]
    });

    msls._addEntryPoints(lightSwitchApplication.Student, {
        /// <field>
        /// Called when a new student is created.
        /// <br/>created(msls.application.Student entity)
        /// </field>
        created: [lightSwitchApplication.Student]
    });

    msls._addEntryPoints(lightSwitchApplication.sysdiagram, {
        /// <field>
        /// Called when a new sysdiagram is created.
        /// <br/>created(msls.application.sysdiagram entity)
        /// </field>
        created: [lightSwitchApplication.sysdiagram]
    });

    msls._addEntryPoints(lightSwitchApplication.TipNaAktivnost, {
        /// <field>
        /// Called when a new tipNaAktivnost is created.
        /// <br/>created(msls.application.TipNaAktivnost entity)
        /// </field>
        created: [lightSwitchApplication.TipNaAktivnost]
    });

}(msls.application));
