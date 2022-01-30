function sortTypePack ( $typePack ) {                       // back type of the pack

    let types = [ "USUAL", "SPEEDED", "EXPRESS" ];

    if ( $typePack == types[ 0 ] ) {

        return 1;
    } else if ( $typePack == types[ 1 ] ) {

        return 2;
    } else if ( $typePack == types[ 2 ] ) {

        return 3;
    } else {
        
        return 0;
    }
}