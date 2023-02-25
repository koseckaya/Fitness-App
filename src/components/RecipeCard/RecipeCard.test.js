import React from 'react';
import renderer from 'react-test-renderer';
import RecipeCard from './RecipeCard';

const props = {
    label: "Maple Banana Frozen Yogurt" ,
    imgUrl: "https://edamam-product-images.s3.amazonaws.com/web-img/041/04158b5869398c899942336274f0e0f7.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=fe8b6ae85466c4bffd9afb033f019a7ff865bdf67870b4bfbc7906e10cc8c621",
    calories: 200,
}

describe("RecipeCard component", () => { 
    it('should render component with default props', () => {
        const tree = renderer
            .create(<RecipeCard {...props} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render component without label props', () => {
        const newProps = { ...props, label: "" }
        const component = renderer
            .create(<RecipeCard {...newProps} />)
            .toJSON();
        expect(component).toMatchSnapshot();
    });
    it('should render component without imgUrl props', () => {
        const newProps = { ...props, imgUrl: "" }
        const component = renderer
            .create(<RecipeCard {...newProps} />)
            .toJSON();
        expect(component).toMatchSnapshot();
    });
    it('should render component without calories props', () => {
        const newProps = { ...props, calories: 0 }
        const component = renderer
            .create(<RecipeCard {...newProps} />)
            .toJSON();
        expect(component).toMatchSnapshot();
    });
})