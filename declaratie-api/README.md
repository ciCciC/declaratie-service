<h2>Readme voor Postgresql</h2>

<p>Voor het opslaan van bestanden in de database wordt er gebruik gemaakt van BLOB.
Het probleem bij gebruik van BLOB is dat ze bij verwijderen of wijzigen alleen de referentie in tabel declarationfile wordt verwijderd of gewijzigd.
Dit komt doordat de blob bestanden worden opgeslagen in tabel "pg_largeobject". Zo werkt het helaas bij Postgresql.</p>

<p>Work around<p>
<p>Om dit probleem te kunnen oplossen moet bij het aanmaken van de database de volgende RULES worden aangemaakt en uitgevoerd:</p>

<p>Om te kunnen verwijderen</p>
CREATE RULE dropdeclarationfile AS ON DELETE TO declaration_file
    DO SELECT lo_unlink( OLD.file );

<p>Om te kunnen verwijderen</p>
CREATE RULE repdeclarationfile AS ON UPDATE TO declaration_file
    DO SELECT lo_unlink( OLD.file )
       where OLD.file <> NEW.file;
       
