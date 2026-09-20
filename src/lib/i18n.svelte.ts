export function t(key: keyof typeof translations.en): string {
  return translations[i18n.lang][key];
}

export const i18n = $state({lang: 'en' as 'en' | 'el'});

const translations = {
  en: {
    nav_contact: "CONTACT",
    nav_home: "HOME",
    nav_register: "REGISTER & FAQ",
    nav_schedule: "SCHEDULE",
    nav_speakers: "SPEAKERS",
    nav_sponsors: "SPONSORS",
    hero_title: "INSPIRED BY SCIENCE, GUIDED BY ETHICS",
    register_button: "REGISTER",
    event_about: "WHAT IS THE EVENT ABOUT?",
    event_about_a: "Το Science Crossroads αποτελεί ένα διήμερο συνέδριο αφιερωμένο στη διερεύνηση του ρόλου της ηθικής στον χώρο των επιστημών, με έμφαση στα ηθικά ζητήματα που διαμορφώνουν τη σύγχρονη επιστημονική έρευνα και πρακτική. Σε μια εποχή ραγδαίων τεχνολογικών εξελίξεων και σύνθετων παγκόσμιων προκλήσεων, η διοργάνωση δημιουργεί ένα διεπιστημονικό πλαίσιο προβληματισμού και διαλόγου αναφορικά με τον τρόπο με τον οποίο η επιστήμη μπορεί να προάγεται και να αναπτύσσεται με υπευθυνότητα και προς όφελος του κοινού καλού.",
    event_participant: "WHO WILL BE PARTICIPATING?",
    event_participant_a: "The conference will bring together distinguished university professors, renowned experts, and leading authorities from a range of disciplines, and will be open to a wider audience within and beyond the academic community. Through keynote lectures, panel discussions, and open dialogue, participants will exchange ideas and explore the ethical dimensions of scientific work from multiple perspectives.",
    event_gain: "WHAT IS TO BE GAINED FROM THE EVENT?",
    event_gain_a: "Attendees will gain valuable insights into the responsibilities, challenges, and principles that guide ethical practice in the sciences today. The conference aims to foster critical thinking, interdisciplinary collaboration, and a deeper understanding of how science can contribute to society with integrity and responsibility.",
    workshops: "WORKSHOPS",
    speeches: "SPEECHES",
    speakers: "SPEAKERS",
    event_details: "EVENT DETAILS",
    event_date: "MARCH",
    kedea: "Aristotle University's Research Administration Center (KEDEA)",
    get_directions: "GET DIRECTIONS",
    seats: "LIMITED SEATS, BOOK YOURS NOW!"
  },
  el: {
    nav_contact: "ΕΠΙΚΟΙΝΩΝΙΑ",
    nav_home: "ΑΡΧΙΚΗ",
    nav_register: "ΕΓΓΡΑΦΗ & ΕΡΩΤΗΣΕΙΣ",
    nav_schedule: "ΠΡΟΓΡΑΜΜΑ",
    nav_speakers: "ΟΜΙΛΗΤΕΣ",
    nav_sponsors: "ΧΟΡΗΓΟΙ",
    hero_title: "ΕΜΠΝΕΣΜΕΝΟΙ ΑΠΟ ΤΗΝ ΕΠΙΣΤΗΜΗ, ΚΑΘΟΔΗΓΟΥΜΕΝΟΙ ΑΠΟ ΤΗΝ ΗΘΙΚΗ",
    register_button: "ΕΓΓΡΑΨΟΥ",
    event_about: "ΠΟΙΟ ΕΙΝΑΙ ΤΟ ΘΕΜΑ ΤΗΣ ΕΚΔΗΛΩΣΗΣ;",
    event_about_a: "Το Science Crossroads αποτελεί ένα διήμερο συνέδριο αφιερωμένο στη διερεύνηση του ρόλου της ηθικής στον χώρο των επιστημών, με έμφαση στα ηθικά ζητήματα που διαμορφώνουν τη σύγχρονη επιστημονική έρευνα και πρακτική. Σε μια εποχή ραγδαίων τεχνολογικών εξελίξεων και σύνθετων παγκόσμιων προκλήσεων, η διοργάνωση δημιουργεί ένα διεπιστημονικό πλαίσιο προβληματισμού και διαλόγου αναφορικά με τον τρόπο με τον οποίο η επιστήμη μπορεί να προάγεται και να αναπτύσσεται με υπευθυνότητα και προς όφελος του κοινού καλού.",
    event_participant: "ΠΟΙΟΙ ΘΑ ΣΥΜΜΕΤΕΧΟΥΝ;",
    event_participant_a: "Το συνέδριο θα συγκεντρώσει διακεκριμένους πανεπιστημιακούς καθηγητές, καταξιωμένους εμπειρογνώμονες και κορυφαίους εκπροσώπους διαφόρων επιστημονικών κλάδων, ενώ θα είναι ανοιχτό και σε ένα ευρύτερο κοινό, εντός και πέραν της ακαδημαϊκής κοινότητας. Μέσα από κεντρικές ομιλίες, συζητήσεις σε πάνελ και ανοιχτό διάλογο, οι συμμετέχοντες θα έχουν την ευκαιρία να ανταλλάξουν ιδέες και να εξετάσουν τις ηθικές διαστάσεις της επιστημονικής δραστηριότητας από διαφορετικές οπτικές γωνίες.",
    event_gain: "ΠΟΙΑ ΤΑ ΟΦΕΛΗ ΤΗΣ ΣΥΜΜΕΤΟΧΗΣ ΣΤΗΝ ΕΚΔΗΛΩΣΗ;",
    event_gain_a: "Οι συμμετέχοντες θα αποκομίσουν πολύτιμες γνώσεις σχετικά με τις ευθύνες, τις προκλήσεις και τις θεμελιώδεις αρχές που διέπουν την άσκηση της επιστημονικής δραστηριότητας με ηθική συνέπεια στη σύγχρονη εποχή. Στόχος του συνεδρίου είναι να ενισχύσει την κριτική σκέψη, να προάγει τη διεπιστημονική συνεργασία και να συμβάλει στην ουσιαστικότερη κατανόηση του τρόπου με τον οποίο η επιστήμη μπορεί να υπηρετεί την κοινωνία με ακεραιότητα και υπευθυνότητα.",
    workshops: "WORKSHOPS",
    speeches: "SPEECHES",
    speakers: "SPEAKERS",
    event_details: "EVENT DETAILS",
    event_date: "MARCH",
    kedea: "Aristotle University's Research Administration Center (KEDEA)",
    get_directions: "GET DIRECTIONS",
    seats: "LIMITED SEATS, BOOK YOURS NOW!"
  }
};